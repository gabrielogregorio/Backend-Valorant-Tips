import { formatStackToBeautiful } from '@/utils/formatStackToBeautiful';

const exampleStackError = `title error
   at NameClass.method (src/example/file:12:34)
   at NameClass2.method2 (node_modules/example/file:56:78)
   at NameClass3.method3 (src/example/file:9:10)
`;

const exampleNodeModulesStack = `title error
   at NameClass.method (node_modules/example/file:12:34)
   at NameClass2.method2 (node_modules/example/file:56:78)
   at NameClass3.method3 (node_modules/example/file:9:10)
`;

describe('formatStackToBeautiful', () => {
  it('should return empty on stack is empty, null or undefined', () => {
    expect(formatStackToBeautiful({ stack: '', maxLengthStack: 1 })).toEqual('');
    expect(formatStackToBeautiful({ stack: null, maxLengthStack: 2 })).toEqual('');
    expect(formatStackToBeautiful({ stack: undefined, maxLengthStack: 3 })).toEqual('');
  });

  it('should remove title error, text "at" and node_modules files', () => {
    const result = formatStackToBeautiful({ stack: exampleStackError });

    expect(result).toEqual('NameClass.method > NameClass3.method3');
  });

  it('should limit stack error', () => {
    const result = formatStackToBeautiful({
      stack: exampleStackError,
      maxLengthStack: 1,
    });

    expect(result).toEqual('NameClass.method');
  });

  it('should preserve full stack when stack is only node modules', () => {
    const result = formatStackToBeautiful({
      stack: exampleNodeModulesStack,
    });

    expect(result).toEqual(
      'title error >    at NameClass.method (node_modules/example/file:12:34) >    at NameClass2.method2 (node_modules/example/file:56:78) >    at NameClass3.method3 (node_modules/example/file:9:10) > ',
    );
  });
});
