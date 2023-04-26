interface DataPanelProps {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
}

export const DataPanel = ({
  ipAddress,
  location,
  timezone,
  isp,
}: DataPanelProps) => {
  return (
    <div className="flex gap-16 text-black bg-gray-300 rounded-md">
      <div className="flex flex-col  gap-4 p-8 ">
        <span className="text-sm">IP ADRESS</span>
        <span className="text-2xl">{ipAddress}</span>
      </div>

      <div className="flex flex-col  gap-4 p-8">
        <span className="text-sm">Location</span>
        <span className="text-2xl">{location}</span>
      </div>

      <div className="flex flex-col gap-4 p-8">
        <span className="text-sm">Timezone</span>
        <span className="text-2xl">{timezone}</span>
      </div>

      <div className="flex flex-col  gap-4 p-8">
        <span className="text-sm">ISP</span>
        <span className="text-2xl">{isp}</span>
      </div>
    </div>
  );
};
