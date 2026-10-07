import { useState } from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import Filter from "./components/Filter";

const Main = styled.main`
  min-height: 100vh;
  background: #f1f5f9;
  color: #0f172a;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 25px;
`;

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Empty = styled.p`
  text-align: center;
  color: #64748b;
  padding: 30px;
`;

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Practice useState and props",
      status: "Active",
      priority: "High",
    },

    {
      id: 2,
      title: "Learn Styled Components",
      description: "Practice dynamic styling",
      status: "Pending",
      priority: "Medium",
    },

    {
      id: 3,
      title: "Create Portfolio",
      description: "Build a professional portfolio",
      status: "Completed",
      priority: "Low",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const addTask = (newTask) => {
    setTasks((oldTasks) => [
      ...oldTasks,
      newTask,
    ]);
  };

  const deleteTask = (id) => {
    setTasks((oldTasks) =>
      oldTasks.filter((task) => task.id !== id)
    );
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <Main>

      <Navbar />

      <Container>

        <Heading>
          My Tasks
        </Heading>

        <TaskForm addTask={addTask} />

        <Filter
          filter={filter}
          setFilter={setFilter}
        />

        <TaskGrid>

          {filteredTasks.length === 0 ? (
            <Empty>
              No tasks found.
            </Empty>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
              />
            ))
          )}

        </TaskGrid>

      </Container>

    </Main>
  );
}

export default App;