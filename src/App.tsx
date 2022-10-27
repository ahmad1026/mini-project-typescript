import React from "react";
import CardTodo from "./components/Todos";
import InPut from "./components/Input";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <div className="max-w-2xl flex flex-col h-screen m-auto overflow-x-hidden">
      <Layout>
        <InPut/>
        <CardTodo />
      </Layout>
    </div>
  );
}
