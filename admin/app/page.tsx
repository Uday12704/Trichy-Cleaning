import AppBarChart from "@/components/AppBarChart";
import AppAreaChart from "@/components/AppAreaChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2"><AppBarChart /></div>
      <div className="bg-primary-foreground rounded-lg p-4"><CardList title="Latest Transaction" /></div>
      <div className="bg-primary-foreground rounded-lg p-4"><AppPieChart /></div>
      <div className="bg-primary-foreground rounded-lg p-4"><TodoList /></div>
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2"><AppAreaChart /></div>
      <div className="bg-primary-foreground rounded-lg p-4"><CardList title="Popular Products" /></div>
    </div>
  );
}
