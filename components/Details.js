import ConsumptionCard from "./ConsumptionCard";

export default function Details({client, products, handleConsumption}) {



  return (
    <section>
      <h2>{client.name}</h2>

      {
        products?.map((product) => {
          return <ConsumptionCard key={product.id} product={product} onSelect={handleConsumption}/>
        })
      }




    </section>
  );
}