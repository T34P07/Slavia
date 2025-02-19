import List from "../components/List";

const items = [
  { id: 1, date: "03.02.2025", title: "Puchar za 3 miejsce Mistrzostwa Ślaska Drużynowych U20 i U2", description: "W dniu 03.02.2025 podczas treningu odwiedził nas Pan Andrzej Skowronek ( Syn Henryka Skowronka) Członek Zarządu Śląskiego Związku Podnoszenia Ciężarów Wręczając nam puchar za 3 miejsce Mistrzostwa Ślaska Drużynowych U20 i U23. Puchar odebrał Prezes Cks Slavia Leon Dudziak wraz z zawodnikami z Ukrainy Vadim, kirył wraz z ich ojcem Sergiejem. Na treningu była również obecna nasza dawna zawodniczka Wiktoria Grzywocz Mistrzyni Śląska i finalistka Mistrzostw Polski w Biłgoraju w  2016r. Nasi zawodnicy mimo młodego wieku startowali w zawodach seniorskich zajmując 5 miejsce w Śląskim Związku Podnoszenia Ciężarów na rok 2024. Dziękujemy wszystkim za możliwość uczestnictwa w sportowej rywalizacji drużynowej ze sportowymi pozdrowieniami CKS SLAVIA" },
  { id: 2, date: "2024-02-18", title: "Item 2", description: "This is the second item." },
  { id: 3, date: "2024-02-17", title: "Item 3", description: "This is the third item." },
  { id: 4, date: "2024-02-16", title: "Item 4", description: "This is the fourth item." },
];

const Achievements: React.FC = () => {
  return (
    <div>
      <List items={items} borderColor="white/30" />
    </div>
  );
}

export default Achievements;
