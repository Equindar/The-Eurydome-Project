import Link from 'next/link';

interface LanguageSelectProps {}

const LanguageSelect = (props: LanguageSelectProps) => {
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

export default LanguageSelect;
