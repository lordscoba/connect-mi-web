import { Scomponents } from "../home";

const TopServices = () => {
  return (
    <div className="space-y-4">
      <div className="font-bold">Top Services</div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
        <Scomponents.ServiceCard />
        <Scomponents.ServiceCard />
        <Scomponents.ServiceCard />
        <Scomponents.ServiceCard />
        <Scomponents.ServiceCard />
        <Scomponents.ServiceCard />
        <Scomponents.ServiceCard />
        <Scomponents.ServiceCard />
      </div>
    </div>
  );
};

export default TopServices;
