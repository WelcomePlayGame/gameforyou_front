export const convertToLatinChars = (input: string): string => {
    const cyrillicAndPolishMap: { [key: string]: string } = {
      а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z',
      и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r',
      с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh',
      щ: 'sch', ь: '', ы: 'y', ъ: '', э: 'e', ю: 'yu', я: 'ya',
      ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z',
      А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'E', Ж: 'ZH', З: 'Z',
      И: 'I', Й: 'Y', К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O', П: 'P', Р: 'R',
      С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'KH', Ц: 'TS', Ч: 'CH', Ш: 'SH',
      Щ: 'SCH', Ь: '', Ы: 'Y', Ъ: '', Э: 'E', Ю: 'YU', Я: 'YA',
    };
  
    return input
      .replace(/[^\w\s]/g, '')
      .replace(/./g, (match) => cyrillicAndPolishMap[match] || match);
  };
  