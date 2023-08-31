import React, { useState } from "react";

export default function Home() {
  const [votoSim, setVotoSim] = useState(false);
  const [votoNao, setVotoNao] = useState(false);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",
    }}>
      {!votoSim && !votoNao && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#696969",
            padding: "20px",
            margin: "20px",
            borderRadius: "5px",
            color: "#fff",
            border: "10px solid #4F4F4F",
          }}
        >
          <h2 style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Roboto, sans-serif",
            marginRight: "100px",
          }}>
            Esse conteúdo foi útil?
          </h2>
          <button
            style={{
              backgroundColor: "#363636",
              color: "#00FF00",
              border: "2px solid #00FF00",
              borderRadius: "5px",
              padding: "10px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
              marginRight: "20px",
            }}
            onClick={() => setVotoSim(true)}
          >
            😄 Sim
          </button>
          <button
            style={{
              backgroundColor: "#363636",
              color: "#FF0000",
              border: "2px solid #FF0000",
              borderRadius: "5px",
              padding: "10px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
            }}
            onClick={() => setVotoNao(true)}
          >
            🙁 Não
          </button>
        </div>
      )}
      {(votoSim || votoNao) && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#696969",
            padding: "20px",
            margin: "20px",
            borderRadius: "5px",
            color: "#fff",
            textAlign: "center",
            border: "10px solid #4F4F4F",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}>
            Obrigado!
          </h2>
          <br />
          <p style={{ fontSize: "15px", fontWeight: "bold", fontFamily: "Roboto, sans-serif" }}>
            Sua opinião é muito importante para melhorarmos a qualidade dos nossos conteúdos!
          </p>
        </div>
      )}
    </div>
  );
}