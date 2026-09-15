'use client';

import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Phone, 
  ChevronRight, 
  Flame,
  CreditCard,
  X
} from 'lucide-react';

// Dados base baseados no cardápio real da Casa da Parrilla
const CATEGORIAS = [
  { id: 'combos', nome: 'Combos & Festivais' },
  { id: 'burgers', nome: 'Burgers na Parrilla' },
  { id: 'batatas', nome: 'Batatas & Acompanhamentos' },
  { id: 'molhos', nome: 'Molhos Especiais' },
  { id: 'bebidas', nome: 'Bebidas' },
  { id: 'cervejas', nome: 'Cervejas VIPs' },
];

const PRODUTOS = [
  {
    id: 1,
    categoria: 'combos',
    nome: 'Combo Parrilla Bento / LOVE BURGUER FESTIVAL 2024',
    descricao: 'Pão brioche, blend bovino de 160g preparado na parrilla, duas fatias de queijo cheddar derretido, molho especial da casa, acompanhado de batata frita crocante.',
    preco: 55.90,
    imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    destaque: true
  },
  {
    id: 2,
    categoria: 'burgers',
    nome: 'Parrilla Burger Classic',
    descricao: 'Pão brioche selado na manteiga, blend bovino artesanal 160g na grelha, queijo prato, alface, tomate fresco e maionese defumada.',
    preco: 34.90,
    imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    destaque: false
  },
  {
    id: 3,
    categoria: 'burgers',
    nome: 'Double Cheddar Bacon',
    descricao: 'Dois blends bovinos de 120g na parrilla, muito cheddar cremoso e tiras crocantes de bacon selecionado no pão de brioche.',
    preco: 42.00,
    imagem: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
    destaque: false
  },
  {
    id: 4,
    categoria: 'batatas',
    nome: 'Batata Frita Especial da Casa',
    descricao: 'Porção individual de batatas rústicas com tempero artesanal de ervas e sal de parrilla.',
    preco: 18.00,
    imagem: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    destaque: false
  },
  {
    id: 5,
    categoria: 'molhos',
    nome: 'Maionese Verde da Parrilla',
    descricao: 'Pote 50ml da receita secreta da casa com ervas finas e toque de alho assado.',
    preco: 4.50,
    imagem: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80',
    destaque: false
  }
];

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('combos');
  const [carrinho, setCarrinho] = useState<typeof PRODUTOS>([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const adicionarAoCarrinho = (produto: typeof PRODUTOS[0]) => {
    setCarrinho([...carrinho, produto]);
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  const produtosFiltrados = PRODUTOS.filter(
    (item) => item.categoria === categoriaAtiva
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans pb-24">
      {/* Top Banner de Status */}
      <div className="bg-red-950/60 border-b border-red-800/40 px-4 py-2 text-center text-xs text-red-300 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        <span>Atendimento Hoje: Terça a Sábado das 17:00 às 23:00 | Domingo 16:30 às 22:00</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 px-4 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 font-bold">
            <Flame size={20} />
          </div>
          <div>
            <h1 className="font-black text-lg tracking-wide uppercase text-neutral-100">
              Casa da Parrilla
            </h1>
            <p className="text-xs text-neutral-400 flex items-center gap-1">
              <MapPin size={12} className="text-amber-500" /> Encruzilhada - Recife/PE
            </p>
          </div>
        </div>

        <button 
          onClick={() => setCarrinhoAberto(true)}
          className="relative flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 px-4 py-2 rounded-full font-bold text-sm transition"
        >
          <ShoppingBag size={18} />
          <span className="hidden sm:inline">Ver Pedido</span>
          {carrinho.length > 0 && (
            <span className="bg-neutral-950 text-amber-500 w-5 h-5 rounded-full text-xs flex items-center justify-center font-black">
              {carrinho.length}
            </span>
          )}
        </button>
      </header>

      {/* Hero Dobra Principal */}
      <section className="relative px-4 lg:px-12 py-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-neutral-900">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Flame size={14} /> O Verdadeiro Sabor na Parrilla
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Hambúrgueres artesanais <span className="text-amber-500">grelhados no fogo</span>.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Blends bovinos selecionados, pão macio e receitas exclusivas para você pedir e saborear em casa ou na galeria.
          </p>
        </div>

        {/* Card Destaque Hero */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center">
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" 
            alt="Combo Destaque" 
            className="w-full sm:w-40 h-36 object-cover rounded-xl"
          />
          <div className="space-y-2 text-left w-full">
            <span className="text-xs text-amber-500 font-bold uppercase">Destaque do Mês</span>
            <h3 className="font-bold text-base line-clamp-1">Combo Parrilla Bento</h3>
            <p className="text-xs text-neutral-400 line-clamp-2">Pão brioche, blend 160g, cheddar, molho especial e batata frita.</p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-black text-amber-400">R$ 55,90</span>
              <button 
                onClick={() => adicionarAoCarrinho(PRODUTOS[0])}
                className="bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 text-xs font-bold px-3 py-2 rounded-lg transition"
              >
                + Adicionar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navegação de Categorias (Abas Horizontais) */}
      <nav className="sticky top-[73px] z-30 bg-neutral-950/95 border-b border-neutral-800 py-3 px-4 lg:px-12 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaAtiva(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition ${
                categoriaAtiva === cat.id
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800'
              }`}
            >
              {cat.nome}
            </button>
          ))}
        </div>
      </nav>

      {/* Lista do Cardápio */}
      <main className="max-w-7xl mx-auto px-4 lg:px-12 py-8">
        <h3 className="text-xl font-bold mb-6 text-neutral-200 capitalize">
          {CATEGORIAS.find(c => c.id === categoriaAtiva)?.nome}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosFiltrados.map((item) => (
            <div 
              key={item.id}
              className="bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-4 flex flex-col justify-between transition group"
            >
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-neutral-800 mb-4">
                  <img 
                    src={item.imagem} 
                    alt={item.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                  />
                </div>
                <h4 className="font-bold text-base text-neutral-100 mb-1">{item.nome}</h4>
                <p className="text-xs text-neutral-400 line-clamp-3 mb-4">{item.descricao}</p>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-800/80 pt-3 mt-2">
                <span className="text-lg font-black text-amber-500">
                  R$ {item.preco.toFixed(2).replace('.', ',')}
                </span>
                <button
                  onClick={() => adicionarAoCarrinho(item)}
                  className="bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 font-bold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1"
                >
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Rodapé Informativo (Localização e Horários do Deeliv) */}
      <footer className="max-w-7xl mx-auto px-4 lg:px-12 mt-16 border-t border-neutral-900 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-neutral-400">
          <div className="space-y-2">
            <h5 className="font-bold text-neutral-200 text-sm flex items-center gap-2">
              <MapPin size={16} className="text-amber-500" /> Endereço
            </h5>
            <p>Rua Quarenta e Oito, 878, Galeria em frente à galeria Squina 48</p>
            <p>Encruzilhada - Recife/PE</p>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-neutral-200 text-sm flex items-center gap-2">
              <Clock size={16} className="text-amber-500" /> Horários
            </h5>
            <p>Terça a Sábado: 17:00 às 23:00</p>
            <p>Domingo: 16:30 às 22:00</p>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-neutral-200 text-sm flex items-center gap-2">
              <CreditCard size={16} className="text-amber-500" /> Pagamento
            </h5>
            <p>Cartão de Débito, Crédito (Visa, Mastercard, Amex) e PIX.</p>
          </div>
        </div>
      </footer>

      {/* Modal Lateral do Carrinho / Resumo do Pedido */}
      {carrinhoAberto && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-neutral-900 h-full p-6 flex flex-col justify-between border-l border-neutral-800">
            <div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <ShoppingBag size={20} className="text-amber-500" /> Seu Pedido
                </h3>
                <button 
                  onClick={() => setCarrinhoAberto(false)}
                  className="p-1 text-neutral-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {carrinho.length === 0 ? (
                <p className="text-neutral-500 text-sm py-8 text-center">Seu carrinho está vazio.</p>
              ) : (
                <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                  {carrinho.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-neutral-950 p-3 rounded-xl border border-neutral-800">
                      <div>
                        <p className="font-bold text-xs">{item.nome}</p>
                        <p className="text-amber-500 font-semibold text-xs">R$ {item.preco.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-neutral-800 pt-4 space-y-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span>Total:</span>
                <span className="text-xl text-amber-500">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <a
                href={`https://wa.me/?text=Olá! Gostaria de fazer o pedido: ${carrinho.map(c => c.nome).join(', ')} - Total: R$ ${total.toFixed(2)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition text-sm"
              >
                <MessageCircle size={18} />
                Enviar Pedido no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}