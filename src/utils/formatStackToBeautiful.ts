const INDEX_AFTER_TITLE = 1;
const REGEX_TEXT_AT_STACK = /^\s{1,}at\s{1,}/;
// const REGEX_PATH_STACK_FILE = /\([a-zA-Z0-9\\.:\\/_-]{1,}\)/;
const REGEX_REMOVE_ANONYMOUS_INFO = /(\.<anonymous>|\(<anonymous>\))/;

type optionsType = {
  stack?: string | null;
  maxLengthStack?: number;
};

export const formatStackToBeautiful = ({ stack = undefined, maxLengthStack = Infinity }: optionsType): string => {
  if (!stack) {
    return '';
  }

  const stackList = stack.split('\n');

  const stackOnlySourceCodeWithoutTitle = stackList
    .slice(INDEX_AFTER_TITLE, stackList.length)
    .filter((line) => line !== '' && !line.includes('node_modules/'))
    .map((item) =>
      item
        .replace(REGEX_TEXT_AT_STACK, '')
        // .replace(REGEX_PATH_STACK_FILE, '')
        .replace(REGEX_REMOVE_ANONYMOUS_INFO, '')
        .trim(),
    );

  if (!stackOnlySourceCodeWithoutTitle.length) {
    return stackList.slice(0, maxLengthStack).join(' > ');
  }

  return stackOnlySourceCodeWithoutTitle.slice(0, maxLengthStack).join(' > ');
};