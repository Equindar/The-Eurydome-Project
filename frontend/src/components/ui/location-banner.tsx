type LocationBannerProps = {
  title: string;
  subtitle?: string;
};

const LocationBanner = (props: LocationBannerProps) => {
  return (
    <div className="fixed left-1/4 top-1/4 z-5 h-screen w-screen animate-fade opacity-0">
      <div className="relative box-border h-auto w-1/2 border-2 [border-image:linear-gradient(to_right,transparent,white,transparent)_50] border-x-transparent bg-gradient-to-r from-transparent via-slate-900 p-5 text-center text-white opacity-70">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        {props.subtitle ?? <h2>{props.subtitle}</h2> }
      </div>
    </div>
  );
};

export default LocationBanner;
