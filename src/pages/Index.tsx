import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      title: 'Воздушные шары',
      description: 'Широкий выбор шаров для любого праздника',
      price: 'от 50₽',
      image: '🎈',
    },
    {
      id: 2,
      title: 'Букеты из шаров',
      description: 'Яркие композиции для особых моментов',
      price: 'от 1500₽',
      image: '🎉',
    },
    {
      id: 3,
      title: 'Цветочные композиции',
      description: 'Свежие цветы с доставкой',
      price: 'от 2000₽',
      image: '🌸',
    },
    {
      id: 4,
      title: 'Оформление зала',
      description: 'Профессиональное event-оформление',
      price: 'от 15000₽',
      image: '🎊',
    },
  ];

  const services = [
    {
      icon: 'Palette',
      title: 'Креативный дизайн',
      description: 'Разработаем уникальное оформление под ваш стиль',
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставим в день заказа по Иркутску',
    },
    {
      icon: 'Sparkles',
      title: 'Event-агентство',
      description: 'Организуем ваш праздник от идеи до реализации',
    },
    {
      icon: 'Heart',
      title: 'Качество гарантируем',
      description: 'Используем только лучшие материалы',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl animate-float">🎈</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Baloo
            </span>
          </div>

          <nav className="hidden md:flex gap-6">
            {['Главная', 'Каталог', 'О нас', 'Доставка', 'Оплата', 'Контакты'].map((item) => {
              const sectionId = item.toLowerCase().replace(' ', '-');
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`story-link transition-colors ${
                    activeSection === sectionId ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {['Главная', 'Каталог', 'О нас', 'Доставка', 'Оплата', 'Контакты'].map((item) => {
                    const sectionId = item.toLowerCase().replace(' ', '-');
                    return (
                      <button
                        key={item}
                        onClick={() => scrollToSection(sectionId)}
                        className="text-left text-lg py-2 story-link"
                      >
                        {item}
                      </button>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <section id="главная" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Воздушные шары{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    и цветы
                  </span>{' '}
                  в Иркутске
                </h1>
                <p className="text-xl text-muted-foreground">
                  Event-агентство полного цикла. Создаём праздничную атмосферу для ваших особенных моментов.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Смотреть каталог
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Связаться
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="text-8xl animate-float">🎈</div>
                    <div className="text-8xl animate-float" style={{ animationDelay: '0.5s' }}>🌺</div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="text-8xl animate-float" style={{ animationDelay: '1s' }}>🎉</div>
                    <div className="text-8xl animate-float" style={{ animationDelay: '1.5s' }}>🌸</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="каталог" className="py-20">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш каталог</h2>
              <p className="text-xl text-muted-foreground">Выберите то, что сделает ваш праздник незабываемым</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className="hover-scale cursor-pointer animate-scale-in border-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4 text-center">{product.image}</div>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button className="bg-secondary hover:bg-secondary/90">
                        <Icon name="Plus" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="о-нас" className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold">О нас</h2>
                <p className="text-lg text-muted-foreground">
                  Мы — команда творческих энтузиастов, которые создают праздничное настроение уже более 5 лет.
                  Event-агентство Baloo специализируется на оформлении воздушными шарами, флористике и организации
                  мероприятий в Иркутске.
                </p>
                <p className="text-lg text-muted-foreground">
                  Каждый проект для нас — это возможность воплотить мечту в реальность. Мы используем только качественные
                  материалы и работаем с душой, чтобы ваш праздник был по-настоящему особенным.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">500+</div>
                    <div className="text-muted-foreground">Событий</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">5</div>
                    <div className="text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent">1000+</div>
                    <div className="text-muted-foreground">Клиентов</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-[200px] leading-none">🎨</div>
              </div>
            </div>
          </div>
        </section>

        <section id="доставка" className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">Доставка</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">🚗</div>
                    <h3 className="font-bold mb-2">По Иркутску</h3>
                    <p className="text-muted-foreground">От 300₽</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="font-bold mb-2">Срочная доставка</h3>
                    <p className="text-muted-foreground">В течение 2 часов</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">🎁</div>
                    <h3 className="font-bold mb-2">Самовывоз</h3>
                    <p className="text-muted-foreground">Бесплатно</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-muted-foreground">
                Доставляем по всему Иркутску каждый день с 9:00 до 21:00. При заказе от 5000₽ — доставка бесплатная!
              </p>
            </div>
          </div>
        </section>

        <section id="оплата" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">Оплата</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl">💳</div>
                  <p className="font-semibold">Картой онлайн</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl">💵</div>
                  <p className="font-semibold">Наличными</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl">📱</div>
                  <p className="font-semibold">СБП</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl">🏢</div>
                  <p className="font-semibold">Безналичный расчёт</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Принимаем все удобные способы оплаты. Для юридических лиц — работа по договору с НДС.
              </p>
            </div>
          </div>
        </section>

        <section id="контакты" className="py-20 bg-foreground text-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">Контакты</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <a href="tel:+73952123456" className="text-lg story-link">
                        +7 (3952) 12-34-56
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@baloo-irk.ru" className="text-lg story-link">
                        info@baloo-irk.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-lg">г. Иркутск, ул. Карла Маркса, 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="mt-1" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-lg">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button size="lg" variant="secondary">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button size="lg" variant="secondary">
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-[150px] leading-none animate-float">✉️</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎈</span>
              <span className="font-bold">Baloo Event Agency</span>
            </div>
            <p className="text-muted-foreground">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;