import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { Component, useState } from 'react';
import PandaPomo from '../../assets/redpanda.png'
import PomoCard from '../PomoCard/PomoCard.js';

const finalSpaceCharacters = [
    {
      id: 'gary',
      name: 'Gary Goodspeed',
      thumb: PandaPomo,
      height: '31m'
    },
    {
      id: 'cato',
      name: 'Little Cato',
      thumb: PandaPomo,
      height: '55m'
    },
    {
      id: 'kvn',
      name: 'KVN',
      thumb: PandaPomo,
      height: '25m'
    },
    {
      id: 'mooncake',
      name: 'Mooncake',
      thumb: PandaPomo,
      height: '15m'
    },
    {
      id: 'quinn',
      name: 'Quinn Ergon',
      thumb: PandaPomo,
      height: '65m'
    }
  ]

function PomoDnD() {
    const [characters, updateCharacters] = useState(finalSpaceCharacters);

    function handleOnDragEnd(result) {
      if (!result.destination) return;
  
      const items = Array.from(characters);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateCharacters(items);
    }
  
    return (
      
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
            
              {(provided) => (
                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                  {characters.map(({id, name, thumb, height}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            {/* <div className="characters-thumb">
                              <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p>
                              { name }
                            </p> */}
                            
                            <PomoCard img={thumb} pomoName={name} height={height} pomoDesc={id}></PomoCard>
                            
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
    );
}

export default PomoDnD;
