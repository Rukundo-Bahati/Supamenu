interface Props {
  action: string;
  quantity: string;
}

const OrderDetails = ({ action, quantity }: Props) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center my-4 w-96">
        <h1 className="text-slate-400">{action}</h1>
        <p>{quantity}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
