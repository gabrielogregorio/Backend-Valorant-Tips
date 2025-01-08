module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/useCase': './src/application/useCase',
          '@/application': './src/application',
          '@/domain': './src/domain',
          '@/utils': './src/utils',
          '@/infrastructure': './src/infrastructure',
          '@/api': './src/infrastructure/api',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts', '**/*.test.ts'],
};
