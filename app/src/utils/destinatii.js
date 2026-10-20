// Lista cu numele orașelor
export const getOrase = (list) => list.map((d) => d.oras)

// Destinațiile nevizitate (vizitat: false)
export const getNevizitate = (list) => list.filter((d) => !d.vizitat)

// Suma zilelor
export const totalZile = (list) => list.reduce((total, d) => total + d.zile, 0)

// Formatare rand de text per destinatie
export const formatDestinatie = ({ oras, tara, zile, vizitat }) =>
  `${vizitat ? '[x]' : '[ ]'} ${oras}, ${tara} (${zile} zile)`

// Numar de destinatii pe fiecare țară
export const numarPeTara = (list) =>
  list.reduce((acc, { tara }) => {
    return { ...acc, [tara]: (acc[tara] ?? 0) + 1 }
  }, {})

// Ordonat descrescător după zile (pe o copie)
export const sortDupaZile = (list) => [...list].sort((a, b) => b.zile - a.zile)


//ex2
// Inversează proprietatea vizitat pentru id-ul dat
export const marcheazaVizitat = (list, id) =>
  list.map((d) => (d.id === id ? { ...d, vizitat: !d.vizitat } : d))

// Adaugă o destinație nouă la final
export const adaugaDestinatie = (list, d) => [...list, d]

// Șterge destinația cu id-ul dat
export const stergeDestinatie = (list, id) => list.filter((d) => d.id !== id)