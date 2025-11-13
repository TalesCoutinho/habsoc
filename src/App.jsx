import React, { useState } from 'react';
import { MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

// Template com dados de exemplo - você pode editar facilmente
const museumsData = [
  {
    id: 1,
    name: "Museu Nacional",
    description: "O Museu Nacional, vinculado à UFRJ, é a mais antiga instituição científica do Brasil. Fundado em 1818, abriga acervos de História Natural, Antropologia e Arqueologia de importância mundial.",
    address: "Quinta da Boa Vista, São Cristóvão, Rio de Janeiro - RJ",
    coordinates: { lat: -22.9056, lng: -43.2266 },
    imageUrl: "https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/466934/e065048a3e61d5d1f5abd9cfa801588emuseunacional/0,250,1200,716/1206,720,0.61/0/default.jpg",
    website: "http://www.museunacional.ufrj.br/"
  },
  {
    id: 2,
    name: "Casa da Ciência",
    description: "Centro cultural de divulgação científica da UFRJ, promove exposições, oficinas e eventos que aproximam a ciência do público em geral, especialmente crianças e jovens.",
    address: "Rua Lauro Müller, 3, Botafogo, Rio de Janeiro - RJ",
    coordinates: { lat: -22.9519, lng: -43.1786 },
    imageUrl: "https://casadaciencia.ufrj.br/wp-content/uploads/2022/01/memoria-cdc.jpg",
    website: "http://www.casadaciencia.ufrj.br/"
  },
  {
    id: 3,
    name: "Museu da Geodiversidade",
    description: "Apresenta a história geológica da Terra e do Brasil através de fósseis, minerais, rochas e réplicas de dinossauros, com foco na geodiversidade brasileira.",
    address: "Av. Athos da Silveira Ramos, 274, Cidade Universitária, Rio de Janeiro - RJ",
    coordinates: { lat: -22.8593, lng: -43.2289 },
    imageUrl: "https://museu.igeo.ufrj.br/wp-content/uploads/2022/10/foto21.jpg",
    website: "http://www.geologia.ufrj.br/museu/"
  },
  {
  "id": 4,
  "name": "Centro de Arte Hélio Oiticica",
  "description": "Abriga exposições de arte contemporânea e várias obras de Hélio Oiticica, além de atividades culturais, oficinas e debates.",
  "address": "Rua Luís de Camões, 68 – Praça Tiradentes, Centro, Rio de Janeiro – RJ, CEP 20051-020",  
  "coordinates": { lat: -22.905977814784425, lng: -43.18329628206045 },
  "imageUrl": "https://scontent.fsdu40-1.fna.fbcdn.net/v/t39.30808-6/326585527_548884973848738_2324813750342060790_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEuUXq9ELp8bf3kFZpDhZoaZ4YHvl1z2-9nhge-XXPb7xLuZeip7AaU4ZutIRVbvG_FjSsP2m2SD7YOjQyvhYTi&_nc_ohc=HPIdAu6IOekQ7kNvwHVnXqf&_nc_oc=Adl-zeby-fPrbfnh6LqU7sgPDxjNrDxC-7ugNwfsaIwY6DQYT8ahZ0PlAycQ7aDdSMY&_nc_zt=23&_nc_ht=scontent.fsdu40-1.fna&_nc_gid=0thJYN14QI_0z3w9eoEqVw&oh=00_AfgkBP-IsnxZ6jLTAvPKpiB-wd2lU9TyExQ-QUzNHxOjuQ&oe=691B86C0",
  "website": "https://www.facebook.com/CMA.HelioOiticica/"
  },
  {
  "id": 5,
  "name": "Colégio Brasileiro de Altos Estudos",
  "description": "Instituto de estudos avançados da UFRJ, dedicado à articulação interdisciplinar e à pesquisa de fronteira nas ciências humanas, naturais e tecnológicas.",
  "address": "Av. Rui Barbosa, 762, Flamengo, Rio de Janeiro – RJ, CEP 22250-020",  
  "coordinates": { lat: -22.942780200216937, lng: -43.174591329475305 },
  "imageUrl": "https://s2.glbimg.com/HI9voxRQdDQpS8o8bzSR0hXh42E=/640x424/top/i.glbimg.com/og/ig/infoglobo1/f/original/2019/09/11/colegio.jpg",
  "website": "https://cbae.ufrj.br/"
 },
 {
  "id": 6,
  "name": "Espaço COPPE Miguel de Simoni",
  "description": "Centro de divulgação científica da UFRJ vinculado à COPPE, com exposição permanente de objetos tecnológicos e apoio à integração entre ciência/tecnologia e sociedade.",
  "address": "Av. Horácio Macedo, 2030 – Bloco I, Cidade Universitária, Ilha do Fundão, Rio de Janeiro – RJ, CEP 21941-450",
  "coordinates": { lat: -22.853828, lng: -43.231108 },
  "imageUrl": "https://coppe.ufrj.br/wp-content/uploads/2025/10/OPcaO-7NICHO-11.png",
  "website": "https://espaco.coppe.ufrj.br/"
 },
 {
  "id": 7,
  "name": "Laboratório Didático do Instituto de Física – UFRJ",
  "description": "Laboratório de divulgação científica da UFRJ, vinculado ao Instituto de Física, com acervo de experimentos didáticos e visitas escolares.",
  "address": "Centro de Tecnologia, Bloco A, sala 418, Cidade Universitária, Ilha do Fundão, Rio de Janeiro – RJ",
  "coordinates": { lat: -22.861106102322193, lng: -43.230233182778235 },
  "imageUrl": "https://ladif.if.ufrj.br/wp-content/uploads/2023/12/exposicao-ciencia-fabio-caffe-sgcom-ufrj-02543.jpg",
  "website": "https://ladif.if.ufrj.br/"
},
  {
  "id": 8,
  "name": "Museu da Escola Politécnica – UFRJ",
  "description": "Inaugurado em 1977, o Museu da Escola Politécnica da UFRJ tem o propósito de preservar a memória da engenharia brasileira, com acervo de mais de 600 itens que ilustram momentos da ciência e tecnologia nacionais.",
  "address": "Av. Athos da Silveira Ramos, 149 – Bloco A, 2º andar, Centro de Tecnologia, Cidade Universitária – Ilha do Fundão, Rio de Janeiro – RJ, CEP 21941-909.",
  "coordinates": { lat: -22.858411, lng: -43.231525 },
  "imageUrl": "https://s3-sa-east-1.amazonaws.com/img.Adl-zeby-fPrbfnh6LqU7sgPDxjNrDxC-7ugNwfsaIwY6DQYT8ahZ0PlAycQ7aDdSMYasartes.com.br/eve/1022-museu-da-escola-politecnica-/9dXb6mbb.jpg",
  "website": "https://www.poli.ufrj.br/a-politecnica/museu/"
},
{
  "id": 9,
  "name": "Observatório do Valongo – UFRJ",
  "description": "Unidade de ensino, extensão e pesquisa em astronomia da UFRJ, situada no Morro da Conceição, abriga o curso de graduação em Astronomia e realiza eventos públicos de observação e divulgação científica.",
  "address": "Ladeira Pedro Antônio, 43, Saúde, Rio de Janeiro – RJ",
  "coordinates": { lat: -22.8934, lng: -43.1710 },
  "imageUrl": "https://vejario.abril.com.br/wp-content/uploads/2016/11/1141_observatorio-do-valongo.jpeg?crop=1&resize=1212,909",
  "website": "https://ov.ufrj.br/"
},
{
  "id": 10,
  "name": "Museu D. João VI – EBA/UFRJ",
  "description": "Museu vinculado à Escola de Belas Artes da UFRJ, reúne acervo da Academia Imperial de Belas Artes e da escola nacional de Belas Artes, preservando a memória do ensino artístico no Brasil.",
  "address": "Av. Pedro Calmon, 550, Ilha do Fundão, Cidade Universitária, Rio de Janeiro – RJ, CEP 21941-485",
  "coordinates": { lat: -22.862312302598962, lng: -43.22337483975962 },
  "imageUrl": "https://scontent.fsdu40-1.fna.fbcdn.net/v/t39.30808-6/493287781_1261579839309562_1360463636517166046_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFAfldLnbhIp5rgPqW92CGqGnXxBu26HrQadfEG7boetMxGsxLVEd-_e0WR5h49-gNySHjow9LMhfockQpaowTK&_nc_ohc=gVFntcjJraYQ7kNvwFjuten&_nc_oc=AdlZYDsAP3OrlMBRuMAFZwwnwJbedFKO-ypN4UUlqa4fvss2-srGB7V9NXlGt7c5Q8M&_nc_zt=23&_nc_ht=scontent.fsdu40-1.fna&_nc_gid=pOL55_7oyX1qqt16Btmutg&oh=00_Afjz-l2G3DITy6GVHYF1GACahNdG_R4EIl_mEoeu5yzE0w&oe=691B881A",
  "website": "https://eba.ufrj.br/museu-d-joao-vi/"
}








];

const MuseumCard = ({ museum, isExpanded, onToggle }) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${museum.coordinates.lat},${museum.coordinates.lng}`;
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={museum.imageUrl} 
          alt={museum.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white">{museum.name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          {museum.description}
        </p>
        
        <div className="flex items-start gap-2 mb-4 text-gray-600">
          <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-600" />
          <span className="text-sm">{museum.address}</span>
        </div>
        
        <button
          onClick={() => onToggle(museum.id)}
          className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors mb-4"
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          {isExpanded ? 'Ocultar mapa' : 'Ver no mapa'}
        </button>
        
        {isExpanded && (
          <div className="mb-4 rounded-lg overflow-hidden border-2 border-gray-200">
            <iframe
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps?q=${museum.coordinates.lat},${museum.coordinates.lng}&output=embed`}
              allowFullScreen
            />
          </div>
        )}
        
        <div className="flex gap-3">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
          >
            <MapPin className="w-5 h-5" />
            Abrir no Maps
          </a>
          {museum.website && (
            <a
              href={museum.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-semibold"
            >
              <ExternalLink className="w-5 h-5" />
              Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [expandedMuseum, setExpandedMuseum] = useState(null);
  const [museums, setMuseums] = useState(museumsData);

  const toggleMap = (id) => {
    setExpandedMuseum(expandedMuseum === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-white">
              <img src="/ufrj-vertical.png" alt="Logo UFRJ" className="w-full h-full object-contain p-2" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Guia cultural para calouros
              </h1>
              <p className="text-gray-600 mt-1">
                Nem só de computação vive o universitário
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore os principais espaços de ciência e cultura da UFRJ. 
            Descubra museus, exposições e centros culturais que promovem 
            a divulgação científica e o patrimônio cultural brasileiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {museums.map((museum) => (
            <MuseumCard
              key={museum.id}
              museum={museum}
              isExpanded={expandedMuseum === museum.id}
              onToggle={toggleMap}
            />
          ))}
        </div>

     </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Trabalho Habilidades Sociais para o Trabalho - Universidade Federal do Rio de Janeiro - UFRJ
          </p>
        </div>
      </footer>
    </div>
  );
}
