import React, { useState } from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import SortableItem from '../utils/dndkit/SortableItem';
import { moveBetweenContainers } from '../utils/dndkit/handlers/MoveBetweenContainers';
import { arrayMove } from '../utils/dndkit/array';
import '../assets/style/Question.css';
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Droppable } from '../utils/dndkit/Droppable';
import { GenerateQuery } from '../data/data';

const query = GenerateQuery();

export function Question() {
  const [items, setItems] = useState({
    dropzone: [],
    answers: query,
  });


  const [activeId, setActiveId] = useState();
  // dnd

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function findContainer(id) {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  }

  function handleDragStart(event) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  const handleDragOver = ({ over, active }) => {
    const { id } = active;
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (!overContainer) {
      return;
    }

    if (activeContainer !== overContainer) {
      setItems((items) => {
        const activeItems = items[activeContainer];
        const overItems = items[overContainer];

        const activeIndex = activeItems.indexOf(id);
        const overIndex = overItems.indexOf(overId);

        return moveBetweenContainers(
          items,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id
        );
      });
    }
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current.sortable.index;
      const overIndex = over.data.current?.sortable.index || 0;

      setItems((items) => {
        let newItems;
        if (activeContainer === overContainer) {
          newItems = {
            ...items,
            [overContainer]: arrayMove(
              items[overContainer],
              activeIndex,
              overIndex
            ),
          };
        } else {
          newItems = moveBetweenContainers(
            items,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
          );
        }
        return newItems;
      });
    }
  };

  // after dnd
  const { difficulty, groupid, id, questionid } = useParams(); 
  const now = (1 / 3) * 100;
  return (
    <Container>
      <ProgressBar now={now} animated />

      <div className="question-box mt-5">
        <Alert variant="primary" align="center">
          Observe o Schema abaixo e organize os bloquinhos para completar a
          Query fazendo o que se pede.
        </Alert>
        <Figure align="center" className="question-image">
          <Figure.Image alt="qualuqer" src="/exemplo.png" />
          <Figure.Caption>
            Busque todos os dados da tabela “usuarios” :
          </Figure.Caption>
        </Figure>

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
        >
          <div>
            {/* {Object.keys(items).map((group) => (
              <Droppable id={group} items={items[group]} key={group} />
            ))} */}
            <Droppable id="dropzone" items={items.dropzone} />
            <Droppable id="answers" items={items.answers} />
          </div>
          <DragOverlay>
            {activeId ? <SortableItem id={activeId} /> : null}
          </DragOverlay>
        </DndContext>
        {console.log(items.dropzone)}
        {console.log(items.answers)}
        <div className="actions">
          <Link to={`/questions/${difficulty}/${groupid}/question/${questionid}`}>
            <Button variant="danger" type="button" align="center">
              <IoChevronBack />
              Cancelar
            </Button>
          </Link>
          <Link>
            <Button variant="primary" type="button" align="center">
              Avançar
              <IoChevronForward />
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
