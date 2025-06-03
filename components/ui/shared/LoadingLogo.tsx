import Image from "next/image";

type Props = {
  size?: number;
};

export default function LoadingLogo({ size = 100 }: Props) {
  return (
    <div className={`flex items-center justify-center h-full w-full`}>
      <Image
        src="/logo.svg"
        alt="loading"
        width={size}
        height={size}
        className="animate-spin"
      />
      <p className="text-2xl font-bold">
        Thank you for choosing{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Convo
        </span>
        , we are loading your account...
      </p>
    </div>
  );
}
