import { useState, useEffect, useRef } from "react";
import { MenuHeader } from "./components/MenuHeader";
import { SectionBar } from "./components/SectionBar";
import { MenuItem } from "./components/MenuItem";
import { DishModal } from "./components/DishModal";
import { FloatingCartButton } from "./components/FloatingCartButton";
import { CartPanel } from "./components/CartPanel";
import { NoteModal } from "./components/NoteModal";
// import { menuData } from "./data/menuData";
import type { Dish, CartItem } from "./types/menu";

const API_URL = "http://localhost:3000/api";

export default function AppMenu() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("Menús del día");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [noteModalDishId, setNoteModalDishId] = useState<string | null>(null);

  // 🔽 nuevo: platos desde el backend
  const [allDishes, setAllDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const sections = ["Menús del día", "Platos de fondo", "Agregados", "Bebestibles"];

  // --- efecto para esconder/mostrar header según scroll ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // sección activa según scroll
      let current = sections[0];
      for (const section of sections) {
        const ref = sectionRefs.current[section];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- efecto para cargar platos desde el backend ---
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_URL}/dishes`);
        if (!res.ok) {
          throw new Error("Error al cargar el menú");
        }

        const data: Dish[] = await res.json();
        setAllDishes(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message ?? "Error al cargar el menú");
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  const scrollToSection = (section: string) => {
    const ref = sectionRefs.current[section];
    if (ref) {
      const yOffset = -120;
      const y = ref.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleAddToCart = (dish: Dish, quantity: number) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.dish.id === dish.id
    );

    if (existingItemIndex >= 0) {
      const newCart = [...cartItems];
      newCart[existingItemIndex].quantity += quantity;
      setCartItems(newCart);
    } else {
      setCartItems([...cartItems, { dish, quantity }]);
    }
  };

  const handleRemoveItem = (dishId: string) => {
    setCartItems(cartItems.filter((item) => item.dish.id !== dishId));
  };

  const handleAddNote = (dishId: string) => {
    setNoteModalDishId(dishId);
  };

  const handleSaveNote = (note: string) => {
    if (noteModalDishId) {
      const newCart = cartItems.map((item) =>
        item.dish.id === noteModalDishId ? { ...item, note } : item
      );
      setCartItems(newCart);
    }
  };

  const handleCheckout = () => {
    // por ahora solo simula el envío del pedido
    alert("Pedido enviado (pendiente conexión al backend).");
    setShowCart(false);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const noteModalItem = cartItems.find(
    (item) => item.dish.id === noteModalDishId
  );

  return (
    <div className="min-h-screen bg-orange-50 flex justify-center">
      {/* Contenedor tipo “celular” centrado en pantallas grandes */}
      <div className="w-full text-xs md:text-sm max-w-lg md:max-w-4xl lg:max-w-7xl bg-orange-50">
        <MenuHeader isVisible={headerVisible} />

        <SectionBar
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          isVisible={headerVisible}
        />

        <main className="pt-[140px] pb-24 px-4">
          {loading && (
            <p className="text-center text-orange-700">
              Cargando menú...
            </p>
          )}

          {error && (
            <p className="text-center text-red-600 mb-4">
              {error}
            </p>
          )}

          {!loading && !error && (
            <>
              {sections.map((section) => {
                const dishes = allDishes.filter(
                  (dish) => dish.category === section
                );

                return (
                  <div
                    key={section}
                    ref={(el) => {
  sectionRefs.current[section] = el;
}}
                    className="mb-8"
                  >
                    <h2 className="text-orange-800 mb-4 px-2">{section}</h2>

                    {/* 
                      Mobile   -> 1 columna (lista vertical)
                      md (tablet) -> 2 columnas
                      lg (PC)  -> 3 columnas
                    */}
                    <div
                      className="
                        space-y-2
                        md:space-y-0
                        md:grid md:grid-cols-2
                        lg:grid-cols-3
                        md:gap-4
                        lg:gap-6
                      "
                    >
                      {dishes.map((dish) => (
                        <MenuItem
                          key={dish.id}
                          dish={dish}
                          onClick={() => setSelectedDish(dish)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </main>

        <FloatingCartButton
          itemCount={totalItems}
          onClick={() => setShowCart(true)}
        />

        {selectedDish && (
          <DishModal
            dish={selectedDish}
            onClose={() => setSelectedDish(null)}
            onAdd={(quantity) => handleAddToCart(selectedDish, quantity)}
          />
        )}

        {showCart && (
          <CartPanel
            cartItems={cartItems}
            onClose={() => setShowCart(false)}
            onRemoveItem={handleRemoveItem}
            onAddNote={handleAddNote}
            onCheckout={handleCheckout}
          />
        )}

        {noteModalDishId && noteModalItem && (
          <NoteModal
            currentNote={noteModalItem.note || ""}
            dishName={noteModalItem.dish.name}
            onClose={() => setNoteModalDishId(null)}
            onSave={handleSaveNote}
          />
        )}
      </div>
    </div>
  );
}
