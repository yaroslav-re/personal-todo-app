import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

function App() {
  return (
    <div className="bg-gradient-to-r from-sky-400 to-sky-600 w-full h-56 flex flex-column">
      {/* задний фон и input */}
      <Input
        prefix={<SearchOutlined />}
        placeholder="search"
        className="bg-sky-400 text-center top-4 rounded-xl text-slate-100 text-sm p-1 w-4/5"
      />
      <div className="bg-sky-300 opacity-50 w-24 h-24 absolute top-32 left-0 rounded-tr-full" />
      <div className="bg-sky-300 opacity-50 w-20 h-20 absolute top-36 left-0 rounded-tr-full" />
      <div className="bg-sky-300 opacity-50 w-16 h-16 absolute top-40 left-0 rounded-tr-full" />
      <div className="bg-indigo-400 opacity-50 w-20 h-20 absolute top-36 right-0 rounded-tl-full" />
      <div className="bg-indigo-400 opacity-50 w-16 h-16 absolute top-40 right-0 rounded-tl-full" />

      {/* дата */}
      <h1 className="text-6xl absolute top-20 text-lime-400 left-8">15</h1>
      <h1 className="text-2xl text-neutral-100 absolute top-20 left-28">
        April
      </h1>
      <h1 className="text-xl text-neutral-200 absolute top-28 left-28">2022</h1>
      <h1 className="text-lg text-neutral-200 absolute top-28 right-16 font-serif">
        Friday
      </h1>
      {/* это такой светло-серый фон */}
      <div className="bg-slate-200 w-full h-2/3 absolute bottom-0" />
      {/* белый прямоугольник на фоне тудушек */}
      <div className="w-11/12 h-3/4 bg-slate-100 absolute bottom-0 left-4">
        {/* здесь начинается первая тудушка */}
        <div className="bg-slate-100 w-10/12 h-20 shadow-lg left-7 absolute top-8">
          {/* полосочка слева */}
          <div className="w-1.5 h-20 bg-sky-500">
            <h1 className="text-lg absolute top-3 left-8 font-medium">
              Meeting
            </h1>
            <h2 className="absolute top-10 text-xs font-medium left-8">
              Room 408, east 2 layer
            </h2>
            {/* галочка в правом верхнем углу */}
            <div className="bg-sky-500 w-8 h-8 absolute top-0 right-0 rounded-bl-full" />
            {/* время */}
            <h3 className="absolute top-5 text-sm font-semibold right-8 ">
              10:30
            </h3>
          </div>
        </div>
        {/* здесь начинается вторая тудушка */}
        <div className="bg-slate-100 w-10/12 h-20 shadow-lg left-7 absolute top-32">
          {/* полосочка слева */}
          <div className="w-1.5 h-20 bg-amber-400">
            <h1 className="text-lg absolute top-3 left-8 font-medium">
              Do exersize
            </h1>
            <h2 className="absolute top-10 text-xs font-medium left-8">
              Call the coach
            </h2>
            {/* галочка в правом верхнем углу */}
            <div className="bg-sky-500 w-8 h-8 absolute top-0 right-0 rounded-bl-full" />
            {/* время */}
            <h3 className="absolute top-5 text-sm font-semibold right-8">
              19:00
            </h3>
          </div>
        </div>
        {/* здесь начинается третья тудушка */}
        <div className="bg-slate-100 w-10/12 h-20 shadow-lg left-7 absolute top-56">
          {/* полосочка слева */}
          <div className="w-1.5 h-20 bg-violet-700">
            <h1 className="text-lg absolute top-3 left-8 font-medium">Movie</h1>
            <h2 className="absolute top-10 text-xs font-medium left-8">
              Take a bunch of flowers
            </h2>
            {/* галочка в правом верхнем углу */}
            <div className="bg-sky-500 w-8 h-8 absolute top-0 right-0 rounded-bl-full" />
            {/* время */}
            <h3 className="absolute top-5 text-sm font-semibold right-8">
              20:00
            </h3>
          </div>
        </div>
        {/* здесь начинается четвёртая тудушка */}
        <div className="bg-slate-100 w-10/12 h-20 shadow-lg left-7 absolute top-80">
          {/* полосочка слева */}
          <div className="w-1.5 h-20 bg-green-600">
            <h1 className="text-lg absolute top-3 left-8 font-medium">
              Check email
            </h1>
            {/* галочка в правом верхнем углу */}
            <div className="bg-sky-500 w-8 h-8 absolute top-0 right-0 rounded-bl-full" />
            {/* время */}
            <h3 className="absolute top-5 text-sm font-semibold right-8">
              22:00
            </h3>
          </div>
        </div>
        <div className="fixed w-12 h-12 bottom-8 shadow-md bg-slate-100 left-40 rounded-full" />
      </div>
    </div>
  );
}

export default App;

// единица rem = 16 пикселям
// сверстать дизайн по макету в компоненте App.js
