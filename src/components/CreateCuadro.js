import axios from 'axios'
import { useEffect, useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'

const URI = 'http://localhost:4000/equipos/' 
const URI2= 'http://localhost:4000/cabeceras/'

const CreateCuadro = () =>{
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [factorDemanda, setFactorDemanda] = useState('')
    const [factorDemandaVA, setFactorDemandaVA] = useState('')
    const [tableroId, setTableroId] = useState('')
    const navigate = useNavigate()    

    const [nombreC, setNombreC] = useState('')
    const [tableroIdC, setTableroIdC] = useState('')

    const [cuadros, setCuadro] = useState([])
    useEffect(()=>{
        getCuadro()
    }, [])

    const [cabeceras, setCabecera] = useState([])
    useEffect(()=>{
        getCabecera()
    }, [])
    //muestra

    const getCabecera = async()=>{
        const res=await axios.get(URI2)
        setCabecera(res.data)
    }

    const getCuadro = async()=>{
        const res = await axios.get(URI)
        setCuadro(res.data)
    }
    //procedimiento guardar

    const storeC = async (e) =>{
        e.preventDefault()
        await axios.post(URI2, {nombre:nombreC, tableroId: tableroIdC})
        navigate('/')
    }

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre: nombre, cantidad:cantidad, factorDemanda:factorDemanda, 
                                factorDemandaVA:factorDemandaVA, tableroId:tableroId})
        navigate('/')
    }  
    //elimina
    const deleteCuadro = async(id)=>{
        axios.delete(`${URI}${id}`)
        getCuadro()
    }
    
    return(
        
        <div className='container'>
            <h3>Crear nuevo cuadro de carga</h3>
            <form onSubmit={storeC} className='container text-center'>
                <div className='row'>
                    <div className='col'>
                        <label className='form-label'>Nombre del cuadro de carga</label>
                        <input
                        value={nombreC}
                        onChange={(e)=> setNombreC(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Tipo de sistema</label>
                     {/*    <select className='form-control'>
                        <option selected>Sistema</option>
                        <option value="1">Bifásico</option>
                        <option value="2">Trifásico</option>
                        </select> */}
                        <input
                        value={tableroIdC}
                        onChange={(e)=> setTableroIdC(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                    </div>
                    <div className='d-grid col p-4 mt-2'>
                        <button type='submit' className='btn btn-primary btn'>Crear</button>
                    </div>
                    
                </div>

            </form>
            <h3>Crear equipos</h3>
            <form onSubmit={store} className='container text-center'>
                <div className='row'>

                <div className='col'> 
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                </div>
                <div className='col'> 
                    <label className='form-label'>Cantidad</label>
                    <input
                        value={cantidad}
                        onChange={(e)=> setCantidad(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                </div>
                <div className='col'> 
                    <label className='form-label'>FactorDemanda</label>
                    <input
                        value={factorDemanda}
                        onChange={(e)=> setFactorDemanda(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                </div>
                <div className='col'> 
                    <label className='form-label'>FactorDemandaVA</label>
                    <input
                        value={factorDemandaVA}
                        onChange={(e)=> setFactorDemandaVA(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                </div>
                <div className='col'> 
                    {/* <select className='form-control mt-2 mb-2'
                            value={tableroId}
                            onChange={(e)=> setTableroId(e.target.value)}
                            
                            >Sistema
                            <option value="1">Bifásico</option>
                            <option value="2">Trifásico</option>
                        </select> */}
                     <label className='form-label'>Sistema</label>
                    <input
                        value={tableroId}
                        onChange={(e)=> setTableroId(e.target.value)}
                        type='text'
                        className='form-control mb-2'
                        />
                <button type='submit' className='btn btn-primary mb-3'>Enviar</button>
                </div>

                
                </div>
            </form>
            <div className='row'>
                <div className='col'>
                    <table className='table'>                        
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Fases del cuadro de carga</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cabeceras.map((cabecera) =>(
                                <tr key={cabecera.id}>
                                    <td>{cabecera.nombre}</td>
                                    <td>{cabecera.tableroId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <div className='row'>
                <div className='col'>
                    {/* <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear</Link> */}
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>FD</th>
                                <th>FD VA</th>
                                <th>Fases</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cuadros.map((cuadro) =>(
                                <tr key={cuadro.id}>
                                    <td>{cuadro.nombre}</td>
                                    <td>{cuadro.cantidad}</td>
                                    <td>{cuadro.factorDemanda}</td>
                                    <td>{cuadro.factorDemandaVA}</td>
                                    <td>{cuadro.tableroId}</td>
                                    <td>
                                        <Link to={`/edit/${cuadro.id}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={()=>deleteCuadro(cuadro.id)} className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CreateCuadro