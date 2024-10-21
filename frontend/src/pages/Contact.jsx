import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    rg: "",
    email: "",
    phone: "",
    reason: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Contato cadastrado com sucesso!");
        setFormData({
          // Limpa o formulário
          name: "",
          cpf: "",
          rg: "",
          email: "",
          phone: "",
          reason: "",
          description: "",
        });
      } else {
        throw new Error("Erro ao cadastrar contato");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Contato</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
  
            <div className="col-sm-6">
              <label htmlFor="name" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Informe o seu nome completo..."
                value={formData.name}
                required
                onChange={handleChange}
              />
            </div>
  
            <div className="col-sm-6">
              <label htmlFor="cpf" className="form-label">
                CPF
              </label>
              <input
                type="text"
                className="form-control"
                name="cpf"
                id="cpf"
                placeholder="Informe o seu CPF..."
                value={formData.cpf}
                required
                onChange={handleChange}
              />
            </div>
  
            <div className="col-sm-6">
              <label htmlFor="rg" className="form-label">
                RG
              </label>
              <input
                type="text"
                className="form-control"
                name="rg"
                id="rg"
                placeholder="Informe o seu RG..."
                value={formData.rg}
                required
                onChange={handleChange}
              />
            </div>
  
            <div className="col-sm-6">
              <label htmlFor="phone" className="form-label">
                Telefone
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Informe o seu Telefone..."
                value={formData.phone}
                required
                onChange={handleChange}
              />
            </div>
  
            <div className="col-sm-6">
              <label htmlFor="reason" className="form-label">
                Motivo
              </label>
              <input
                type="text"
                className="form-control"
                name="reason"
                id="reason"
                placeholder="Informe o motivo pelo contato..."
                value={formData.reason}
                required
                onChange={handleChange}
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Motivo do Contato
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                placeholder="Descrição"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>
  
            <hr className="my-4" />
  
            <button type="submit" className="w-100 btn btn-primary btn-lg">
              Cadastrar
            </button>
  
          </div>
        </form>
      </div>
    </>
  );
  }  
