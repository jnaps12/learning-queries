import React, { useEffect, useState } from 'react';
import { Container, Alert, Button, Spinner } from 'react-bootstrap';
import { redirect, Link, useParams, useNavigate } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
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
import SpinnerComponent from '../components/SpinnerComponent';
import useAxios from 'axios-hooks';
import { GenerateQuery } from '../api/data';
import { BASE_URL } from '../api/axios';

export function Question() {
  const navigate = useNavigate();
  const { difficulty, groupid, questionid } = useParams();

  const [{ data, loading, error }] = useAxios(
    `${BASE_URL}/question/${questionid}`
  );

  const [
    { data: patchData, loading: patchLoading, error: patchError },
    updateData,
  ] = useAxios({
    url: `${BASE_URL}/question/${questionid}`,
    method: 'PATCH',
    data: {
      done: true,
    },
  });

  const [
    {
      data: patchDataGroup,
      loading: patchLoadingGroup,
      error: patchErrorGroup,
    },
    updateDataGroup,
  ] = useAxios({
    url: `${BASE_URL}/question-group/${groupid}`,
    method: 'PATCH',
    data: {
      done: true,
    },
  });

  function handleClick() {
    console.log('cheguei auqi');
    updateData();
    updateDataGroup();
  }
  // console.log(data);

  const rightQuery = data ? data?.query.split(' ') : [];
  let query = GenerateQuery(rightQuery);

  const [items, setItems] = useState({
    dropzone: [],
    answers: [],
  });

  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    setItems((items) => ({
      ...items,
      answers: rightQuery,
    }));
    // console.log(items);
  }, [data]);

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

  if (loading) return <SpinnerComponent />;
  if (error) return <h2>{error}</h2>;

  function handleAnswer(e) {
    e.PreventDefault;
    let dropzoneString = items?.dropzone.join(' ');
    let correctQuery = [...data?.query].join('');

    if (dropzoneString.toLowerCase() == correctQuery.toLowerCase()) {
      // console.log('boa');
      setCorrect(() => true);
      setIncorrect(() => false);
    } else {
      // console.log('tente novamente');
      setCorrect(() => false);
      setIncorrect(() => true);
    }
  }

  return (
    <Container>
      <div className="question-box mt-5">
        <Alert variant="primary" align="center">
          Observe o Schema abaixo e organize os bloquinhos para completar a
          Query fazendo o que se pede.
        </Alert>
        <Figure align="center" className="question-image">
          <Figure.Image alt="Imagem da tabela" src={data && data.thumbUrl} />
          <Figure.Caption>{data && data.description}</Figure.Caption>
        </Figure>
        {incorrect && (
          <Alert variant="danger  " align="center">
            A sua query está incorreta, por favor tente novamente.
          </Alert>
        )}

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
        <div className="actions">
          <Button
            variant="danger"
            type="button"
            align="center"
            as={Link}
            to={`/questions/${difficulty}`}
          >
            <IoChevronBack />
            Cancelar
          </Button>

          {correct == false ? (
            <Button
              style={{
                marginLeft: '10px',
              }}
              variant="secondary"
              type="button"
              align="center"
              onClick={handleAnswer}
            >
              Veririficar
              <IoChevronForward />
            </Button>
          ) : (
            <Button
              style={{
                marginLeft: '10px',
              }}
              variant="primary"
              type="button"
              align="center"
              as={Link}
              to={`/questions/${difficulty}`}
              onClick={handleClick}
            >
              Avançar
              <IoChevronForward />
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}
