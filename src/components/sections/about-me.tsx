import Image from 'next/image';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="О себе" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              priority={true}
              width={1000}
              height={1000}
              src={'/images/fullPhoto.jpg'}
              alt="Fullpose of Andrey"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Заинтересовались мной?
            <br />
            Вот краткая информация:
          </Typography>
          <Typography>
            Я увлечённый разработчик‑самоучка, специализирующийся на fullstack разработке
            (React.js и Node.js). Мне нравится воплощать в жизнь технические и визуальные
            аспекты цифровых продуктов. Для меня важны пользовательский опыт, безупречный
            дизайн (pixel perfect) и написание чистого, понятного и
            высокопроизводительного кода.
          </Typography>
          <Typography>
            Я начал путь веб‑разработчика в начале 2025 года и с тех пор непрерывно
            развиваюсь: берусь за новые задачи и осваиваю современные технологии. Сейчас я
            создаю передовые веб‑приложения с использованием востребованных инструментов,
            таких как React, TypeScript, Tailwind CSS и многих других.
          </Typography>
          <Typography>
            Я мыслю прогрессивно и люблю работать над продуктами от начала до конца — от
            зарождения идеи до реализации.
          </Typography>
          <Typography>
            Когда я не погружён в разработку, то меня можно найти за настольной игрой в
            компании друзей или на сцене ресторана с акустической гитарой.
          </Typography>
          <Typography>И напоследок — несколько фактов обо мне.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Побеждал на хакатонах</Typography>
              <Typography component="li">Люблю видеоигры</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Вдохновляюсь{' '}
                <a
                  href="https://ru.wikipedia.org/wiki/Хоук,_Тони"
                  target="blank"
                  style={{ textDecoration: 'underline' }}
                >
                  Тони Хоуком
                </a>
                🛹
              </Typography>
              <Typography component="li">Знаю где найти Макдональдс в России</Typography>
            </ul>
          </div>
          <Typography>
            Я открыт для проектной работы — не стесняйтесь обращаться! Обещаю, я не
            кусаюсь 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
