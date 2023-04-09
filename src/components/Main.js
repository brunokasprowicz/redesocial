import React from "react"
import '../App.css'
import './main.css'

export default function Main(){
    const dadosPostagens = [
        {
            img: 'https://cdn.pixabay.com/photo/2014/04/26/04/25/woman-332278_960_720.jpg',
            descImg: 'Foto Joana',
            nome: 'Joana da Silva',
            imgPostagem: 'https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_960_720.jpg',
            descImgPost : 'Foto das Maldivas', 
            texto:'Viagem as Maldivas.. Aproveitando as ferias...',
            imgCom: 'https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg',
            descImgCom: 'Foto Rodrigo',
            nomeCom: 'Rodrigo Ribeiro',
            textoCom: 'Lindo lugar, aproveite a viagem.'
        },
        {
            img: 'https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg',
            descImg: 'Foto Rodrigo',
            nome: 'Rodrigo Ribeiro',
            imgPostagem: 'https://cdn.pixabay.com/photo/2016/07/14/23/07/sugar-loaf-pao-de-acucar-1517925_960_720.jpg',
            descImgPost : 'Foto do Rio de Janeiro', 
            texto:'Lindo Rio de Janeiro',
            imgCom: 'https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_960_720.jpg',
            descImgCom: 'Foto Roberta',
            nomeCom: 'Roberta Duarte',
            textoCom: 'Que lindo!!'
        }
   
    ]
    
    return(
        <>
        <section className="main">
            {
                dadosPostagens.map(data =>{
                    const {img , nome ,  descImg , imgPostagem ,    descImgPost , texto , imgCom , descImgCom,  nomeCom, textoCom ,} = data
                    return(
                        <>
                        <div className="postagem">
                        <div className="autor-postagem">
                            <img src={img} alt={descImg} className="img-autor-postagem"/>
                            <div style={{
                                display: 'flex',
                                flexDirection : 'column'
                            }}>
                            <p>{nome} postou:</p>
                            <p><i>Data da publicação: 09/04/2023</i> </p>
                            </div>
                        
                        </div>
                        <div className="caixa-img-postagem">
                            <img src={imgPostagem} alt={descImgPost} className="img-postagem"></img>
                        </div>
                         <div style={{
                            dislay:'flex'
                        
                         }}>
                            <p style={{
                                padding: '10px'
                            }}>32 Curtidas</p>  
                            <p style={{
                                padding: '10px'
                            }}>1 compartilhamento</p>  
                        </div>   
                        
                        <div className="texto-postagem">
                            <p>{texto}</p>
                        </div>
                        <div className="comentarios">
                           <img src={imgCom} alt={descImgCom} className="img-comentario"></img>
                           <div className="cx-comentario">
                           <p>{nomeCom}</p>
                           <p><i>{textoCom}</i></p> 
                           </div>
                           
                        </div>
                        </div>
                       
                       
                        </>
                    )
                })
            }

    

        </section>                
        </>
    )
}

