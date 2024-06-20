interface QuestWidgetProps {
  position: string;
}

const QuestWidget = () => {
  return (
    <div className="w-1/8 absolute left-0 top-1/3 ml-5 h-auto bg-black p-5 opacity-60">
      <h1>Quest Widget</h1>
      <ul className="text-equindar_blue relative">
        <li className="border border-neutral-300 pl-2 pr-2">Quest #1</li>
        <li>Quest #2</li>
        <li>Quest #3</li>
      </ul>
    </div>
  );
};

export default QuestWidget;
