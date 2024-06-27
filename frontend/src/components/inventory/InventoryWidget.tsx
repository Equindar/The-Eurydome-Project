interface InventoryWidgetProps {
  }
  
  const InventoryWidget = () => {
    return (
      <div className="flex w-1/4 min-w-min h-96 bg-black border-white border opacity-60">
        <div className="relative left-1/2 -top-16 -ml-16">
            <div className="absolute top-0 w-32 h-32 bg-black border-white border z-50">
                {/* <img src="" alt="" width={104} height={104} className="m-3"/> */}
            </div>
            <div className="absolute -top-2 -left-2 w-36 h-36 bg-black rotate-45 border-white border z-20"></div>
            <div className="absolute top-2 left-2 w-28 h-28 rotate-45 border-white border z-30"></div>
        </div>
        <div className="relative flex  align-center justify-center w-full h-full text-white p-5 pt-28 ml-16 border-red-500 border">
          <div className=" border-red-500 border h-full w-full grid grid-flow-col">

          <div className="w-16 h-16 flex flex-row border-white border justify-between">01</div>
          <div className="w-16 h-16 border-white border">02</div>
          <div className="w-16 h-16 border-white border">03</div>
          <div className="w-16 h-16 border-white border">01</div>
          <div className="w-16 h-16 border-white border">02</div>
          <div className="w-16 h-16 border-white border">03</div>
          <div className="w-16 h-16 border-white border">01</div>
          <div className="w-16 h-16 border-white border">02</div>
          <div className="w-16 h-16 border-white border">03</div>
          <div className="w-16 h-16 border-white border">01</div>
          <div className="w-16 h-16 border-white border">02</div>
          <div className="w-16 h-16 border-white border">03</div>
        </div>

            <h1>Inventory Widget</h1>
            <p>Content</p>
        </div>
      </div>
    );
  };
  
  export default InventoryWidget;
  