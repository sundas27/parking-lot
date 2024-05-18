export const capitalizeFirstLetter = (text: string | undefined) => {
  return text?.replace(/(?:^|\s)\S/g, (textWord: string) => {
    return textWord.toUpperCase();
  });
};