import React from "react";
import './friends.css'
import '../App.css'

export default function Friends(){
    const dadosAmigos = [
        {
            nome: 'Joana da Silva',
            img: 'https://cdn.pixabay.com/photo/2014/04/26/04/25/woman-332278_960_720.jpg',
            desc: 'Foto joana',
            amg: '16'
        },
        {
            nome: 'Rodrigo Ribeiro',
            img: 'https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg',
            desc: 'Foto Rodrigo',
            amg: '5'
        },
        {
            nome: 'Roberta Duarte',
            img: 'https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_960_720.jpg',
            desc: 'Foto Roberta',
            amg: '32'
        },

    ]


    const dadosSolicitacao = [
        {
            nome: 'Elon Musk',
            img: 'https://cdn.pixabay.com/photo/2021/03/09/23/49/elon-6083103_1280.jpg',
            desc: 'Foto Elon Musk',
            amg: '14'
        },
        {
            nome: 'Joe Biden',
            img: 'https://cdn.pixabay.com/photo/2016/02/14/15/18/barack-obama-1199638_1280.jpg',
            desc: 'Foto Joe Biden',
            amg: '12'
        }
    ]


    return (
    <>
        <section className="aside">

            <h3 className="titulo">Relação de amigos</h3> 
        {
          dadosAmigos.map(data =>{
            const {nome , img, desc , amg} = data
            
            return(
                <div className="card-amigo">
                    <img src={img} alt={desc} />
                    <div className="card-amigo-desc">
                        <h4>{nome}</h4>
                        <p><i>Amigos em comum: {amg}</i></p>
                    </div>
                </div>
            )
          })  
        }
              <h3 className="titulo">Solicitações: </h3> 
              {
          dadosSolicitacao.map(data =>{
            const {nome , img, desc , amg} = data
            
            return(
                <div className="card-amigo">
                    <img src={img} alt={desc} />
                    <div className="card-amigo-desc">
                        <h4>{nome}</h4>
                        <p><i>Amigos em comum: {amg}</i></p>
                        <div className="solicitacoes">
                            <div className="botao-solicitiacao">
                                <p>Aceitar</p>
                            </div>
                            <div className="botao-solicitiacao">
                                <p>Recusar</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
          })  
        }
        </section>
    </>
)

}