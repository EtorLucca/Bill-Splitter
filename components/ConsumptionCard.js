import Select from "./Select";

export default function ConsumptionCard({ product, onChange, onSelect }) {


  return(
    <div>
      <Select product={product} onChange={onSelect}/>
      {
        product.name
      }
    </div>
  );
}