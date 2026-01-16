import React from 'react';
import { motion } from 'framer-motion';
import { TabId } from '../types';
import { Star, Zap, Hash, Target, Radio } from 'lucide-react';

interface TabContentProps {
  activeTab: TabId;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08
    }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-1 pb-40 pt-28">
      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-6"
      >
        {activeTab === TabId.PROPUESTA && <PropuestaText />}
        {activeTab === TabId.PACK1 && <Pack1Text />}
        {activeTab === TabId.PACK2 && <Pack2Text />}
      </motion.div>
    </div>
  );
};

// --- Tech UI Components ---

const TechCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  title?: string;
  id?: string;
}> = ({ children, className = "", title, id = "01" }) => (
  <motion.div variants={itemVariants} className={`relative group ${className}`}>
    {/* Tech Border Structure */}
    <div className="absolute inset-0 border border-neutral-800 bg-[#0a0a0a] clip-corner-tr pointer-events-none" />
    
    {/* Decorative Corners */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40" />
    <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-neutral-700" />
    <div className="absolute top-0 right-8 w-8 h-[1px] bg-neutral-700" />

    <div className="relative p-6 z-10">
      {/* Card Header */}
      {(title || id) && (
        <div className="flex justify-between items-start mb-6 border-b border-neutral-900 pb-2">
          {title && <h3 className="text-white font-tech uppercase tracking-widest text-lg font-bold">{title}</h3>}
          <div className="flex items-center space-x-2">
             <div className="flex space-x-[1px]">
               <div className="w-1 h-3 bg-neutral-800"></div>
               <div className="w-1 h-3 bg-neutral-800"></div>
               <div className="w-1 h-3 bg-neutral-600"></div>
             </div>
             <span className="font-mono-tech text-xs text-neutral-500">SECTOR-{id}</span>
          </div>
        </div>
      )}
      {children}
    </div>
  </motion.div>
);

const TechPrice: React.FC<{ amount: string; label?: string }> = ({ amount, label }) => (
  <motion.div 
    variants={itemVariants} 
    className="relative my-8 p-6 border-y-2 border-white/90 bg-white/5 text-center overflow-hidden group"
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
    <span className="font-mono-tech text-neutral-400 text-sm tracking-[0.3em] block mb-2">{label || "COST ESTIMATE"}</span>
    <div className="font-tech text-6xl md:text-7xl font-bold text-white tracking-tighter flex items-baseline justify-center gap-2">
      <span className="text-2xl text-neutral-400 font-light -translate-y-2">$</span>
      {amount}
      <span className="text-2xl text-neutral-400 font-light ml-2">USD</span>
    </div>
    
    {/* Animated background noise for price */}
    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    <div className="absolute bottom-1 right-2 flex space-x-1">
      <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
      <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-75" />
      <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-150" />
    </div>
  </motion.div>
);

const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <p className={`text-neutral-300 font-mono-tech text-base leading-7 tracking-wide ${className}`}>
    {children}
  </p>
);

// --- Content Blocks ---

const PropuestaText = () => (
  <>
    <div className="flex items-center justify-between mb-2">
      <div className="h-[2px] flex-1 bg-neutral-800 mr-4" />
      <span className="font-mono-tech text-[10px] text-neutral-600">INIT_SEQUENCE_01</span>
    </div>

    <TechCard title="Introducción Estratégica" id="A1">
      <Paragraph className="mb-6">
        La idea es acompañar el lanzamiento de la colección de vinilos de Melt con un plan de marketing integral, cuidadosamente alineado con tus objetivos: definición de identidad de marca, ventas físicas y digitales, fortalecimiento del vínculo con DJs, construcción de una comunidad activa en torno a eventos y talleres, y generación de contenido centrado en sets, procesos y visuales abstractos.
      </Paragraph>
      <Paragraph className="mb-6">
        La estructura está pensada para comenzar de forma accesible y de bajo esfuerzo, priorizando acciones concretas que permitan medir resultados reales desde el inicio. No se trata de una progresión rígida de “Pack 1 a Pack 2”, sino de módulos iniciales independientes, diseñados como punto de partida, que pueden escalarse de manera puntual (más contenido, pauta, análisis de datos avanzados, etc.) únicamente si los indicadores lo justifican.
      </Paragraph>
      <Paragraph className="mb-6">
        El crecimiento del plan queda siempre condicionado a que existan beneficios tangibles para Melt: ventas de vinilos, aumento de interacción, consolidación de comunidad o tracción real alrededor del proyecto. De este modo, avanzamos con criterio, evaluamos impacto y solo ampliamos cuando tiene sentido hacerlo.
      </Paragraph>
      
      <div className="border-l-2 border-white/30 pl-4 py-2 bg-white/5 my-6 rounded-r">
        <Paragraph className="mb-4">
          Para mí, este esquema implica poner el valor del trabajo por delante de cualquier upgrade, construyendo una relación basada en resultados comprobables y confianza mutua. Para vos, significa contar con una estrategia flexible, medible y orientada a objetivos concretos, sin asumir riesgos innecesarios.
        </Paragraph>
        <Paragraph>
          Si te parece bien, el próximo paso podría ser definir qué starter preferís activar y qué métricas usaríamos como referencia para eventuales expansiones del plan. Creo que así sentamos una base sólida para que el crecimiento sea genuinamente beneficioso para ambas partes.
        </Paragraph>
      </div>
    </TechCard>

    <TechCard title="Objetivos" id="A2">
       <ul className="space-y-4">
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph className="uppercase">definir identidad de marca.</Paragraph>
          </li>
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph className="uppercase">ventas fisicas y digitales.</Paragraph>
          </li>
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph className="uppercase">conexiones profesionales con djs.</Paragraph>
          </li>
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph className="uppercase">comunidad participativa en eventos y talleres.</Paragraph>
          </li>
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph className="uppercase">contenido centrado en sets, procesos creativos, visuales abstractos.</Paragraph>
          </li>
       </ul>
    </TechCard>

    <TechCard title="Plan Integral" id="A3">
       <h4 className="font-tech text-white text-lg mb-4 uppercase tracking-widest border-b border-neutral-800 pb-2">
         Propuesta plan de marketing integral para el sello Melt enfocado en el lanzamiento de esta coleccion de vinilos.
       </h4>
       <Paragraph className="mb-6">
          El plan se basa en prácticas probadas para DJs y labels independientes:
          Exploración orgánica en TikTok para testear contenido, migración de lo viral a Instagram con ads data-driven, integración estratégica entre SoundCloud, Bandcamp y Spotify, y un enfoque en extracción de estadísticas para conocer tu público, conectar con ellos y construir comunidad.
       </Paragraph>
       <Paragraph>
          Esto no solo impulsa la ventas de los vinilos, sino que genera buzz local en BSAS, conexiones DJs (outreach sutil) y comunidad activa(invitación a participar).
       </Paragraph>
    </TechCard>
  </>
);

const Pack1Text = () => (
  <>
    <TechPrice amount="500" label="PACK 1" />
    <div className="mb-8 text-center px-4">
        <h2 className="font-tech text-2xl md:text-3xl font-bold text-white uppercase tracking-widest mb-2">Exploración Orgánica</h2>
        <span className="font-mono-tech text-base text-neutral-400 block">(Foco en testeo y comunidad base)</span>
    </div>

    <TechCard title="Detalles Operativos" id="P1">
      <div className="mb-8">
        <h3 className="text-white font-tech uppercase text-lg mb-2">Objetivo:</h3>
        <Paragraph>
          Testear contenido en TikTok para identificar virales, construir comunidad inicial (fans participativos en Melt), +500-1K interacciones orgánicas, ventas iniciales de vinilos, conexiones con DJs. Ideal para low-budget, con énfasis en stats para conocer público.
        </Paragraph>
      </div>

      <div className="space-y-8">
        <h3 className="text-white font-tech uppercase text-xl border-b border-white/20 pb-2">Componentes clave:</h3>
        
        <div>
          <h4 className="text-white font-tech uppercase text-lg mb-2 text-white/90">TikTok Exploratorio:</h4>
          <Paragraph>
             Creamos cuenta dedicada a Melt label . Publicamos piezas orgánicas (visuales abstractos: procesos de tracks, snippets sets progressive, arte vinilo teaser). Analizamos stats (views, shares, demografía: 20-60 años, BA/Arg/World) para extraer insights.
          </Paragraph>
        </div>

        <div>
          <h4 className="text-white font-tech uppercase text-lg mb-2 text-white/90">Migración a Instagram + Ads Virales:</h4>
          <Paragraph>
             Los mejores TikToks con mejor desempeño ( se adaptan y postean en IG (Reels/Stories). $100(aprox) en ads data-driven (Meta Spark Ads en virales orgánicos, targeting: fans progressive house AR, lookalikes de Cattaneo/Digweed/Sasha).
          </Paragraph>
        </div>

        <div>
          <h4 className="text-white font-tech uppercase text-lg mb-2 text-white/90">Plataformas Música Integradas:</h4>
          <ul className="space-y-4 mt-3 pl-2 border-l border-neutral-800">
            <li>
              <strong className="text-white font-mono-tech block mb-1">SoundCloud:</strong>
              <Paragraph>Subimos sets/tracks, playlist "Melt Vibes" para comunidad (invita djs a contribuir tracks/remixes/sets).</Paragraph>
            </li>
            <li>
              <strong className="text-white font-mono-tech block mb-1">Bandcamp:</strong>
              <Paragraph>Página optimizada contemplando opcion para pre-orders vinilos .</Paragraph>
            </li>
            <li>
              <strong className="text-white font-mono-tech block mb-1">Spotify:</strong>
              <Paragraph>Pitching básico a playlists de progressive (SubmitHub), enlace a Bandcamp para conversión ventas.</Paragraph>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-tech uppercase text-lg mb-2 text-white/90">Estrategia Interconectada:</h4>
          <Paragraph>
            Links cruzados (SoundCloud → Bandcamp para descargas, Spotify → IG para comunidad). Ads $100(aprox) en Spotify (Discovery Mode) para streams que alimenten data.
          </Paragraph>
        </div>
        
        <div>
           <h4 className="text-white font-tech uppercase text-lg mb-2 text-white/90">Data-Driven y Comunidad:</h4>
           <Paragraph>
             Usamos analytics (TikTok/IG Insights, Chartmetric básico) como "método de extracción": demografía, horarios peak, preferencias, etc . Posibilidades de UGC (fans comparten vinilo unboxing).
           </Paragraph>
        </div>
      </div>
    </TechCard>
  </>
);

const Pack2Text = () => (
  <>
    <TechPrice amount="1.000" label="PACK 2" />
    <div className="mb-8 text-center px-4">
        <h2 className="font-tech text-2xl md:text-3xl font-bold text-white uppercase tracking-widest mb-2 leading-tight">Comunidad Data-Driven + Marca Personal Antígona</h2>
        <span className="font-mono-tech text-base text-neutral-400 block mt-2">(Escalable según crecimiento de marca personal, volumen de contenido y alcance)</span>
    </div>

    <div className="mb-6 mx-1 p-4 border border-white/20 bg-white/5 text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-[2px] h-full bg-white/50"></div>
        <div className="absolute top-0 right-0 w-[2px] h-full bg-white/50"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
        <Paragraph className="text-white font-bold uppercase tracking-widest text-sm md:text-base">
            INCLUYE TODO LO QUE INCLUYE EL PACK 1 +
        </Paragraph>
    </div>

    <div className="mb-6 p-4 border-l border-white/30">
        <Paragraph>
          Este pack está diseñado para dar un paso más profundo: <strong className="text-white">consolidar a Antígona como marca personal con identidad clara, comunidad activa y capacidad real de generar tracción económica y cultural</strong>, con impacto directo sobre Melt.
        </Paragraph>
    </div>

    <TechCard title="Desarrollo de Marca Personal" id="P2-A">
      <div className="mb-6">
        <Paragraph className="mb-4">
          Trabajamos la identidad de Antígona en TikTok e Instagram desde una definición precisa:
        </Paragraph>
        <ul className="space-y-4 mt-3 pl-2 border-l border-neutral-800">
            <li>
              <strong className="text-white font-mono-tech block mb-1">Quién es:</strong>
              <Paragraph>DJ/productora con un sonido curado y una narrativa clara, orientada a un público amplio pero específico (20–60 años).</Paragraph>
            </li>
            <li>
              <strong className="text-white font-mono-tech block mb-1">Qué busca:</strong>
              <Paragraph>Transformar el proyecto en algo autosustentable, con objetivos explícitos (ventas, conexiones, comunidad).</Paragraph>
            </li>
            <li>
              <strong className="text-white font-mono-tech block mb-1">Qué la diferencia:</strong>
              <Paragraph>Una visión interna sólida que se vuelve tangible a través de sets, procesos creativos y material abstracto que no se limita al resultado final.</Paragraph>
            </li>
        </ul>
      </div>
      <Paragraph>
        La estrategia de contenido deja de ser aislada y pasa a pensarse <strong className="text-white">como un sistema a mediano y largo plazo</strong>, priorizando series continuas que construyen relato, expectativa y pertenencia.
      </Paragraph>
    </TechCard>

    <TechCard title="Enfoque Data-Driven" id="P2-B">
       <div className="mb-2">
         <Paragraph className="mb-4">Implementamos un enfoque basado en datos reales:</Paragraph>
       </div>
       <ul className="space-y-4">
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph>Uso de <strong className="text-white">analytics</strong> para detectar patrones, necesidades y oportunidades (qué tipo de contenido conecta, qué genera interacción sostenida, qué convierte).</Paragraph>
          </li>
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph>Configuración de <strong className="text-white">cuenta de empresa</strong> para medir y optimizar métricas clave: engagement, crecimiento, conversión a ventas y activación de comunidad.</Paragraph>
          </li>
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph>Ajustes estratégicos continuos basados en comportamiento real, no en suposiciones.</Paragraph>
          </li>
       </ul>
    </TechCard>

    <TechCard title="Comunidad Activa" id="P2-C">
       <div className="mb-2">
         <Paragraph className="mb-4">El foco no está solo en crecer audiencia, sino en <strong className="text-white">activar comunidad</strong>:</Paragraph>
       </div>
       <ul className="space-y-4 mb-6">
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph>Incentivo de <strong className="text-white">UGC</strong> (contenido generado por la audiencia) a partir de sets y dinámicas de Antígona.</Paragraph>
          </li>
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph>Activaciones diseñadas para fomentar interacción genuina.</Paragraph>
          </li>
          <li className="flex items-start">
             <span className="text-white/50 mr-3 mt-1">{`>`}</span>
             <Paragraph>Networking estratégico apoyado en data, detectando perfiles clave (DJs, artistas, curadores) con potencial de colaboración.</Paragraph>
          </li>
       </ul>
       <div className="p-3 bg-white/5 border border-dashed border-neutral-700">
         <Paragraph>
           Todo esto se centraliza en un <strong className="text-white">dashboard semanal avanzado</strong>, con lectura clara del rendimiento y proyecciones que permiten anticipar movimientos y oportunidades.
         </Paragraph>
       </div>
    </TechCard>

    <TechCard title="Beneficios Cruzados" id="P2-D">
        <h3 className="text-white font-tech uppercase text-lg mb-4">Antígona × Melt</h3>
        <Paragraph className="mb-4">
           Este pack potencia un <strong className="text-white">círculo virtuoso</strong> entre ambas marcas:
           La identidad de Antígona, bien definida y percibida, genera interacción y confianza. Esa atención migra naturalmente hacia Melt, impulsando ventas físicas y digitales, participación en eventos y talleres, y fortalecimiento de comunidad.
        </Paragraph>
        <Paragraph className="mb-4">
           A su vez, las conexiones que surgen desde la marca personal de Antígona (DJs, playlists, colaboraciones) retroalimentan a Melt, amplificando el buzz local en Buenos Aires y construyendo lealtad sostenida alrededor del proyecto.
        </Paragraph>
        <div className="mt-6 border-t border-neutral-800 pt-4">
            <Paragraph>
              El resultado es un ecosistema coherente, donde <strong className="text-white">marca personal, data y comunidad trabajan juntas</strong> para generar crecimiento real, medible y escalable, alineado con una visión de largo plazo.
            </Paragraph>
        </div>
    </TechCard>
    
    <div className="flex justify-center mt-8">
        <div className="text-[10px] font-mono-tech text-neutral-600 tracking-widest uppercase">
            *** END OF TRANSMISSION ***
        </div>
    </div>
  </>
);

export default TabContent;