import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const FilmCard = ({ imgSrc, className }) => {
  return (
    <div className={clsx("relative w-20 h-28", className)}>
      <Link href="/profile">
        <a className="h-full w-full inline-block absolute z-10"></a>
      </Link>
      <Image
        className="object-contain rounded-md"
        layout="fill"
        src={imgSrc}
        alt="film poster"
      />
    </div>
  );
};

export default FilmCard;
