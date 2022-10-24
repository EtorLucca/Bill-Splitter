import Head from "next/head";
import Card from "../components/Card";
import Details from "../components/Details";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons";
import ProductModal from "../components/ProductModal";
import ClientModal from "../components/ClientModal";

export default function Home() {
  const [dbClients, setDbClients] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [client, setClient] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [productModal, setProductModal] = useState(false);
  const [clientModal, setClientModal] = useState(false);
  const [reload, setReload] = useState(false);

  var total = 0

  useEffect(() => {
    fetch("https://divisor-de-contas.glitch.me/clientes")
      .then((res) => res.json())
      .then(setDbClients);

    fetch("https://divisor-de-contas.glitch.me/produtos")
      .then((res) => res.json())
      .then(setDbProducts)


    setReload(false);
  }, [reload]);

  function handleSelect(selectedClient) {
    setSelectedClient(selectedClient);
    setVisible(true);
  }

  function handleCancel() {
    setProductModal(false);
    setClientModal(false);
  }

  function handleNewProduct() {
    setProductModal(true);
  }
  
  function handleNewClient() {
    setClientModal(true);
  }
  
  function handleAddProduct(product) {
    const postProduct = {
      name: product.name,
      price: product.price,
      amount: product.amount
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postProduct)
    };

    fetch("https://divisor-de-contas.glitch.me/produtos", options)
    .then(data => {
      if(!data.ok) {
        throw Error(data.status);
      }
      return data.json();
    })

    setProductModal(false);
    setReload(true);
  }

  function DataClear() {
    const options = {
      method: "delete",
    };

    //não está dando certo do jeito normal, então terei q usar for
    for (let i = 1; i <= dbClients.length; i++) {
      fetch(`https://divisor-de-contas.glitch.me/clientes/${i}`, options)
      .then(data => {
        if(!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
    }
    for (let i = 1; i <= dbProducts.length; i++) {
      fetch(`https://divisor-de-contas.glitch.me/produtos/${i}`, options)
      .then(data => {
        if(!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
    }

    setReload(true);
  }

  function handleAddClient(client) {
    const postClient = {
      name: client.name,
      consumption: ""
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postClient)
    };

    fetch("https://divisor-de-contas.glitch.me/clientes", options)
    .then(data => {
      if(!data.ok) {
        throw Error(data.status);
      }
      return data.json();
    })

    setClientModal(false);
    setReload(true);
  }

  function handleConsumption(value) {
    console.log(value.target.id, value.target.value)
  }

  dbProducts.map((p) => {
    total += (p.amount*p.price)
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Divisor de Contas</title>
        <meta name="description" content="Divisor de conta" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <section className={styles.bill}>
          <div className={styles.header}>
            <h2 className={styles.title}>Total Conta</h2>
            <div>
              <button onClick={() => handleNewProduct()} className={styles.addProduct}><FontAwesomeIcon className={styles.size20} icon={faCartShopping}/></button>
              <button onClick={() => handleNewClient()} className={styles.addClient}><FontAwesomeIcon className={styles.size20} icon={faPersonCirclePlus}/></button>
            </div>
          </div>
          <div className={styles.clients}>
            {
              dbClients.length == 0 ? <div className={styles.marginTop}><span className={styles.resume}>Ainda não foi cadastrado nenhum cliente.</span></div> : ""
            }
            {dbClients?.map((client) => {
              return <Card key={client.id} tipo="cliente" value={client} onSelect={handleSelect}/>;
            })}
          </div>
          <div className={styles.products}>
            {dbProducts?.map((prod) => {
              return <Card key={prod.id} tipo="produto" value={prod}/>;
            })}
          </div>
          <div className={styles.resume}>
            <span>Total: R$ {total}</span>
            <span>R$ {isNaN(total/dbClients?.length) ? 0 : total/dbClients?.length } /pessoa</span>
          </div>
          <button onClick={() => DataClear()} className={styles.clearBtn}>Nova Comanda</button>
        </section>
        <section className={styles.details}>
          <div>
            <h2 className={styles.titleDetails}>Detalhes</h2>
          </div>
          <div>
            <div className={styles.border}>
              <div className={visible ? styles.description : styles.invisible}>
                {
                  <Details client={selectedClient} products={dbProducts} handleConsumption={handleConsumption}/>
                }
              </div>
            </div>
          </div>
        </section>
      </main>
      <section>
        {
          productModal ? <ProductModal onCancel={handleCancel} onSubmit={handleAddProduct}/> : <></>
        }
        {
          clientModal ? <ClientModal onCancel={handleCancel} onSubmit={handleAddClient}/> : <></>
        }
      </section>
    </div>
  );
}
