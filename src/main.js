import Digits from './sections/digits.js';
import { kaufmanData } from './data.js';
import Table from './sections/table.js';

function Main() {
  return (
    <main className="content">
      <section className="description">
        <div className="two_columns">
          <div className="two_columns__brief">
            <h1 className="two_columns__h1">Главные проблемы в обучении</h1>
          </div>
          <div className="two_columns__paragraph">
            <p>Ни в школе, ни в институте нас не учат тому, как правильно изучать материал. Мы готовимся к экзаменам и учим билеты. Мы тренируемся решать одноообразные задачи, чтобы лучше сдать тест, но часто в итоге это не дает нам реального знания. Зубрежка быстро выветривается и не приносит пользы.</p>
          </div>
          <p><span className="two_columns__span-accent"> Вывод:</span> учиться нужно уметь, но почему-то этому мало где учат. Что с этим делать?</p>
          <div>
          </div>
          <p>Конкретные техники и упражнения помогают изменить подход к обучению, сделать его эффективным и захватывающим. Эти же техники применяются на примере обучения в Практикуме.</p>
          <div>

          </div>
        </div>
      </section>

      <Digits />

      <section className="feynman">
        <div className="feynman__title"><h1>Метод Фейнмана</h1> </div>
        <div className="feynman__subtitle">

          <h6>Выучить и не забыть</h6>
        </div>
        <div className="feynman__link"> <a href=""> Подробнее 	&#8594 </a> </div>
      </section>

      <section className="kaufman">

        <section className="title title_theme_dark">
          <h1>Принципы обучения</h1>
        </section>

        <section className="subtitle subtitle_theme_dark">
          <h3>От Джоша Кауфмана</h3>
        </section>

        <div className="table table_theme_dark">
          <Table data={kaufmanData} isDark={true} />



        </div>



        <section className="kaufman__triangle">
          <img src="./images/kaufman-triangle.svg" alt="фон треугольник" />
        </section>

      </section>
    </main>
  )
}
export default Main;