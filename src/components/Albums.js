import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/albums.css'
import '../styles/componentsStyle.css'
import { Table, Button } from 'react-bootstrap'
import AddNewAlbum from './AddNewAlbum.js'
import { removeAlbum } from '../redux/albums/albums'
import EditAlbum from './EditAlbum.js'
import SearchBar from './SearchBar.js'

const Albums = () => {
  const [isModalShown, showModal] = useState(false)
  const [editModalShown, showEditModal] = useState(false)
  const [rowId, rowClicked] = useState(null)

  const {
    albums,
    filteredAlbums,
    searchBarText
  } = useSelector(state => state.albumsReducer)

  const renderAlbums = searchBarText !== '' ? filteredAlbums : albums

  const dispatch = useDispatch()

  const toggleModal = () => {
    showModal(!isModalShown)
  }

  const toggleEditModal = (index) => {
    rowClicked(index)
    showEditModal(!editModalShown)
  }

  const deleteAlbum = (index) => {
    dispatch(removeAlbum(index))
  }

  return (

    <header className='componentsBackground'>
      <div id='albumStyle'>
        <SearchBar />

        <Button onClick={toggleModal}>
          Add new album
        </Button>

        {isModalShown &&
          <AddNewAlbum show={isModalShown} handleClose={toggleModal} />
        }

        {editModalShown &&
          <EditAlbum
            rowId={rowId}
            album={albums[rowId]}
            show={editModalShown}
            handleClose={toggleEditModal}
          />
        }

        <Table striped bordered hover className='tabelStyle'>
          <thead>
            <tr>
              <th className='textHeaderStyle'>Name</th>
              <th className='textHeaderStyle'>Year</th>
              <th className='textHeaderStyle'>Artist</th>
              <th className='textHeaderStyle'>Cover Photo</th>
              <th className='textHeaderStyle'>Manage</th>
            </tr>
          </thead>
          <tbody>
            {/* ovde se prikazuvaat albumite, sekoj vo poseban redica */}
            {renderAlbums.map((album, index) => {
              return <tr key={index}>
                <td className='tableContentStyle'>{album.albumName}</td>
                <td className='tableContentStyle'>{album.year}</td>
                <td className='tableContentStyle'>{album.artist}</td>
                <td> <img src={album.photo} id='albumImg' /> </td>
                <td>
                  <Button variant='secondary'
                    onClick={() => toggleEditModal(index)}>
                    Edit
                  </Button>
                  <Button
                    variant='danger'
                    onClick={() => deleteAlbum(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>
    </header>

  )
}

export default Albums