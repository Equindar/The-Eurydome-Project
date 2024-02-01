import Link from 'next/link';

interface LanguageSelectProps {}

export const LanguageSelect: React.FC<LanguageSelectProps> = (props) => {
  return (
    <div className="flex w-full flex-row-reverse">
      <ul className="m-5 flex">
        <li className="px-5">
          <Link
            href={{
              pathname: '/de',
            }}
          >
            Deutsch
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: '/en',
            }}
          >
            English
          </Link>
        </li>
      </ul>
    </div>
  );
};
