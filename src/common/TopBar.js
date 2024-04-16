import React from 'react'
import {nav, topdropdown} from '../data/Data'
import { Link } from 'react-router-dom'
const TopBar = () => {
  return (
    <div className='container-fluid'>
    <div className=' row bg-secondary py-1 px-xl-5' >
      <div className='col-lg-6 d-none d-lg-block'>
        <div className='d-inline-flex align-items-center h-100'>
          {nav.slice(2,6).map((val,index)=>(

            <Link className=' text-body mr-3 '>
              {val.text}
            </Link>


          ))
          }
        </div>
        
      </div>
      <div className='col-lg-6 text-center text-lg-right'>
        <div className='d-inline-flex align-items-center h-100'>
          {topdropdown.map((val,index)=>(

           <div className='btn-group' key={index}>
            <button type='button' className=' btn btn-sm btn-light dropdown-toggle'>{val.btn}</button>
            
            </div>


          ))
          }
        </div>
        <div className='d-inline-flex align-items-center d-block d-lg-none'>
          <Link className=' btn px-0 ml-2'>
          <i className="fas fa-heart text-dark" ></i>
          <span
          style={{paddingBottom:"2px"}}
                  className="badge text-dark border border-dark rounded-circle"
                 
                >
                  0
                </span>
          </Link>
          <Link className=' btn px-0 ml-2'>
          <i className="fas fa-shopping-cart text-dark" ></i>
          <span
          style={{paddingBottom:"2px"}}
                  className="badge text-dark border border-dark rounded-circle"
                 
                >
                  0
                </span>
          </Link>
        </div>
      </div>

    </div>
    <div className='row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex'>
      <div className='col-lg-4'>
        <Link className='text-decoration-none ' to='/'>
        <span className='h1 text-uppercase text-primary bg-dark px-2'>Multi</span>
        <span className='h1 text-uppercase text-dark bg-primary px-2'>Shop</span>
        </Link>
      </div>
      <div className='col-lg-4 col-6 text-left'>
        <form>
          <div className='input-group'>
            <input type='text'
             className='form-control' 
             name='text' 
             placeholder='Search for Products' />
             <div className='input-group-append'>
              <span className='input-group-text bg-transparent text-primary'>
                <i className='fa fa-search'></i>
              </span>
             </div>
          </div>

        </form>
      </div>
      <div className=' col-lg-4 col-6 text-right'>
        <p className='m-0'>Coustomer services</p>
        <h5 className='m-0'>+9203248019</h5>
      </div>
    </div>
    </div>
  )
}

export default TopBar
