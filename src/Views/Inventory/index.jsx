//////Version One
/*
import "./inventory.css";
import List from "./List";
import { React, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiFillPlusCircle, AiFillStop } from "react-icons/ai";
import data from "./testItems.json";

const icoStyle = {
    width: "max-content",
    height: "100%",
    color: "gray",
};

function Inventory(props) {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);

    };
    


    
    let inventoryItems = [...data["inv"]];
    
    //onChange={event => setQuery(event.target.value)}

    return (
        <div className='bg-page' id='inv-holder'>
            <span id='inv-search-bar' onChange={inputHandler}>
                
                <BiSearch />
                <input type='text' placeholder='Buscar' onChange={inputHandler}/>
            </span>
            <table id='inv-table'>
                <tbody id='inv-tbody'>
                    <tr className='inv-row'>
                        <th className='inv-col' id='inv-nombre'>
                            Nombre
                        </th>
                        <th className='inv-col' id='inv-uid'>
                            UID
                        </th>
                        <th className='inv-col' id='inv-cantidad'>
                            Cantidad
                        </th>
                        <th className='inv-col' id='inv-precio'>
                            Precio
                        </th>
                        <th className='inv-col' id='inv-eliminar'>
                            Eliminar
                        </th>
                        <th className='inv-col' id='inv-agregar'>
                            Agregar
                        </th>
                    </tr>
                    {inventoryItems.map((item, i) => (
                        <tr className='inv-row' key={item.UID + i}>
                            <td className='inv-col'>{item.nombre}</td>
                            <td className='inv-col'>{item.UID}</td>
                            <td className='inv-col'>{item.cantidad}</td>
                            <td className='inv-col'>{"$" + item.precio}</td>
                            <td className='inv-col'>
                                <button>
                                    <AiFillStop style={icoStyle} />
                                </button>
                            </td>
                            <td className='inv-col'>
                                <button>
                                    <AiFillPlusCircle style={icoStyle} />
                                </button>
                            </td>
                        </tr>
                    ))
                    }

                    
                    
                    
                </tbody>
            </table>
            
        </div>


    );

    //<List input={inputText} />

    /*const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })*/
//}


//VERSION TWO

//export default Inventory;
//export {Inventorys as default};
//export default Inventory;

/*
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './inventory.css';
import Search from './search';
import Announcer from './announcer';
import TextField from "@mui/material/TextField";

const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};

function App() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (
        <div>
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
        </div>
    );


    
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="main">
        <h1>React Search</h1>
        <div className="search">
            <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
            />
        </div>
        <List input={inputText} />
        </div>
    );
}

export default App;*/



//VERSION Three
import "./inventory.css";
import List from "./List";
import { React, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiFillPlusCircle, AiFillStop } from "react-icons/ai";
import data from "./testItems.json";

const icoStyle = {
    width: "max-content",
    height: "100%",
    color: "gray",
};

function App (){
    const [query, setQuery] = useState("")
    return(
      <div  className='bg-page' id='inv-holder'> 
        <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
        <table id='inv-table'>
                    <tbody id='inv-tbody'>
                        <tr className='inv-row'>
                            <th className='inv-col' id='inv-nombre'>
                                Nombre
                            </th>
                            <th className='inv-col' id='inv-uid'>
                                UID
                            </th>
                            <th className='inv-col' id='inv-cantidad'>
                                Cantidad
                            </th>
                            <th className='inv-col' id='inv-precio'>
                                Precio
                            </th>
                            <th className='inv-col' id='inv-eliminar'>
                                Eliminar
                            </th>
                            <th className='inv-col' id='inv-agregar'>
                                Agregar
                            </th>
                        </tr>

                        {
                        /*data.inv?.map((post, index) => (
                            <div key={index}>
                            <p>{post.nombre}</p>
                            <p>{post.precio}</p>
                            </div>
                        ))*/
                        data.inv?.filter(post => {
                            if (query === '') {
                            return post;
                            } else if (post.nombre.toLowerCase().includes(query?.toLowerCase())) {
                            return post;
                            }
                        }).map((post, index) => (
                            <tr className='inv-row' key={index}>
                                <td className='inv-col'>{post.nombre}</td>
                                <td className='inv-col'>{post.UID}</td>
                                <td className='inv-col'>{post.cantidad}</td>
                                <td className='inv-col'>{"$" + post.precio}</td>
                                <td className='inv-col'>
                                <button>
                                    <AiFillStop style={icoStyle} />
                                </button>
                                </td>
                                <td className='inv-col'>
                                    <button>
                                        <AiFillPlusCircle style={icoStyle} />
                                    </button>
                                </td>
                                
                            </tr>


                        ))
                        
                        }
                        
                        
                        
                    </tbody>
                </table>

        
      </div>
    );
  }


export default App;


