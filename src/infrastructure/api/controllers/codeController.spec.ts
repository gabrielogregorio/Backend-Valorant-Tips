import { SECURITY_CODE } from '@/infrastructure/api/config/envs';
import { CodeController } from '@/infrastructure/api/controllers/codeController';
import { Response } from 'express';

const mockCodeService = { execute: jest.fn() };
const codeController = new CodeController(mockCodeService as any);

describe('Code Controller', () => {
  let mockResponse: Partial<Response>;
  let mockSend: jest.Mock;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;

  beforeEach(() => {
    mockSend = jest.fn();
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnValue({ json: jest.fn(), send: mockSend });
    mockResponse = {
      json: mockJson,
      status: mockStatus,
    };
  });

  describe('generate', () => {
    it('should generate a token if the security code is valid', async () => {
      const mockRequest = {
        body: { securityCode: SECURITY_CODE },
      };
      const fakeToken = { code: '12345' };
      mockCodeService.execute.mockResolvedValue(fakeToken);

      await codeController.generate(mockRequest as any, mockResponse as Response);

      expect(mockCodeService.execute).toHaveBeenCalled();
      expect(mockJson).toHaveBeenCalledWith({ token: fakeToken.code });
    });
  });
});
