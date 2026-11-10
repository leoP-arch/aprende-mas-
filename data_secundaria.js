const CURRICULO_SECUNDARIA = {
    "1° de Secundaria": {
        "Matemáticas I: Aritmética y Álgebra Inicial": {
            lecciones: [
                {
                    titulo: "Lección 1: Conversión de fracciones a decimales y viceversa",
                    aprendizaje: "Convierte fracciones decimales a notación decimal y viceversa. Aproxima algunas fracciones no decimales usando la notación decimal.",
                    contenido: `
                        <h4>1. El conjunto de los números racionales en la vida cotidiana</h4>
                        <p>En el Sistema Internacional de Unidades y en las actividades comerciales diarias de México, las cantidades rara vez se presentan únicamente como números enteros. Una fracción representa el cociente de dos números enteros (a/b, donde b es distinto de cero). El numerador indica cuántas partes se toman de la unidad, mientras que el denominador señala en cuántas partes iguales se ha dividido dicha unidad.</p>
                        <h4>2. Procedimiento de conversión de fracción a número decimal</h4>
                        <p>Para transformar cualquier fracción común a su expresión decimal equivalente, se divide el numerador entre el denominador. Al efectuar esta división pueden presentarse dos casos fundamentales: el primero corresponde a los <strong>decimales finitos o exactos</strong> (por ejemplo, 3/4 = 0.75), en los cuales el residuo de la división llega a ser cero; el segundo corresponde a los <strong>decimales periódicos</strong> (como 1/3 = 0.333...), donde una cifra o grupo de cifras se repite indefinidamente.</p>
                        <h4>3. Conversión de número decimal a fracción común</h4>
                        <p>Para expresar un número decimal exacto como fracción decimal, se coloca en el numerador el número sin el punto decimal y, en el denominador, la potencia de 10 con tantos ceros como cifras existan a la derecha del punto. Posteriormente, se simplifica dividiendo ambos términos entre su Máximo Común Divisor (MCD). Por ejemplo: 0.35 = 35/100, que al dividir entre 5 resulta en la fracción irreducible 7/20.</p>
                    `,
                    glosario: "Fracción decimal: Aquella cuyo denominador es una potencia de 10 (10, 100, 1000). | Número periódico: Número decimal con dígitos que se repiten infinitamente."
                },
                {
                    titulo: "Lección 2: Números con signo y valor absoluto en la recta numérica",
                    aprendizaje: "Resuelve problemas de suma y resta con números enteros, fracciones y decimales positivos y negativos.",
                    contenido: `
                        <h4>1. Origen y necesidad de los números negativos</h4>
                        <p>Los números negativos permiten representar magnitudes opuestas a una referencia establecida como el cero: temperaturas bajo cero en regiones montañosas, altitudes por debajo del nivel medio del mar o saldos deudores en contabilidad. El conjunto de los números enteros (Z) está conformado por los enteros positivos, el cero y los enteros negativos.</p>
                        <h4>2. Valor absoluto y números simétricos</h4>
                        <p>El <strong>valor absoluto</strong> de un número es la distancia que existe entre dicho número y el cero en la recta numérica, sin considerar su dirección; por ello, siempre es positivo o cero y se representa entre barras verticales (|-8| = 8 y |+8| = 8). Dos números que tienen el mismo valor absoluto pero signos contrarios se denominan <strong>números simétricos u opuestos</strong>, y su suma siempre es igual a cero.</p>
                        <h4>3. Reglas para la adición y sustracción</h4>
                        <p>Al sumar dos números con el mismo signo, se suman sus valores absolutos y se conserva el signo común. Si tienen signos distintos, se resta el menor valor absoluto del mayor y se asigna el signo del número con mayor valor absoluto.</p>
                    `,
                    glosario: "Valor absoluto: Distancia de un número al origen (cero). | Simétrico: Número que se encuentra a la misma distancia del cero pero en sentido opuesto."
                },
                {
                    titulo: "Lección 3: Jerarquía de operaciones y uso de signos de agrupación",
                    aprendizaje: "Determina y usa la jerarquía de operaciones y los paréntesis en operaciones con números naturales, enteros y decimales.",
                    contenido: `
                        <h4>1. El orden convencional en la matemática</h4>
                        <p>Para evitar ambigüedades al resolver expresiones aritméticas combinadas, la comunidad matemática internacional aplica un orden estricto denominado <strong>jerarquía de operaciones</strong>. Si una expresión se evalúa de izquierda a derecha sin respetar este convenio, se obtienen resultados erróneos.</p>
                        <h4>2. Niveles de ejecución</h4>
                        <p>El orden de resolución es: <strong>Nivel 1:</strong> Signos de agrupación (paréntesis, corchetes y llaves) desde el más interno hacia el externo. <strong>Nivel 2:</strong> Potencias y raíces. <strong>Nivel 3:</strong> Multiplicaciones y divisiones (de izquierda a derecha). <strong>Nivel 4:</strong> Sumas y restas (de izquierda a derecha). Por ejemplo, en 4 + 3 × 5, primero se calcula 3 × 5 = 15 y luego 4 + 15 = 19.</p>
                    `,
                    glosario: "Signos de agrupación: Símbolos (), [], {} que alteran o clarifican el orden de evaluación."
                },
                {
                    titulo: "Lección 4: Proporcionalidad directa y cálculo de porcentajes",
                    aprendizaje: "Calcula valores faltantes en problemas de proporcionalidad directa, con constante natural, fracción o decimal.",
                    contenido: `
                        <h4>1. Relaciones de variación proporcional</h4>
                        <p>Dos magnitudes guardan una relación de <strong>proporcionalidad directa</strong> cuando al multiplicar o dividir una de ellas por un número, la otra queda multiplicada o dividida por ese mismo número. Al cociente constante entre ambas magnitudes (k = y / x) se le llama <strong>constante de proporcionalidad</strong>.</p>
                        <h4>2. El tanto por ciento como razón</h4>
                        <p>El porcentaje representa una razón cuyo denominador es 100. Expresar el 16% de Impuesto al Valor Agregado (IVA) equivale a la fracción 16/100 o al factor decimal 0.16. Para calcular el precio final con descuento o impuesto, basta con multiplicar la cantidad base por el factor decimal correspondiente.</p>
                    `,
                    glosario: "Constante de proporcionalidad (k): Valor fijo que relaciona dos magnitudes directamente proporcionales."
                },
                {
                    titulo: "Lección 5: Ecuaciones lineales de primer grado (ax + b = c)",
                    aprendizaje: "Resuelve problemas mediante la formulación y solución algebraica de ecuaciones lineales.",
                    contenido: `
                        <h4>1. Del lenguaje común al lenguaje algebraico</h4>
                        <p>El álgebra emplea literales (letras) para representar cantidades desconocidas llamadas incógnitas. Una <strong>ecuación</strong> es una igualdad entre dos expresiones algebraicas que solo se verifica para determinados valores de la incógnita.</p>
                        <h4>2. Propiedad uniforme de la igualdad y despeje</h4>
                        <p>Una ecuación funciona como una balanza en equilibrio: cualquier operación que se realice en el primer miembro debe efectuarse de igual forma en el segundo miembro. Para resolver 3x + 5 = 20, se resta 5 en ambos lados (3x = 15) y posteriormente se divide entre 3 (x = 5).</p>
                    `,
                    glosario: "Incógnita: Cantidad desconocida en una ecuación. | Despejar: Aislar la incógnita en un lado de la igualdad."
                }
            ],
            tareas: [
                { pregunta: "1. ¿Cuál es la expresión decimal equivalente a la fracción 3/8?", opciones: ["0.375", "0.380", "0.625", "0.250"], correcta: 0 },
                { pregunta: "2. ¿Cuál es el resultado de la operación respetando la jerarquía: 12 + 8 ÷ 4 × 3?", opciones: ["15", "18", "6", "24"], correcta: 1 },
                { pregunta: "3. En la ecuación 4x - 7 = 13, ¿cuál es el valor de la incógnita x?", opciones: ["x = 3", "x = 4", "x = 5", "x = 6"], correcta: 2 }
            ],
            examen: [
                { pregunta: "1. Al convertir el número decimal 0.45 a su fracción irreducible, se obtiene:", opciones: ["45/10", "9/20", "4/5", "15/30"], correcta: 1 },
                { pregunta: "2. ¿Cuál es el resultado de operar (-15) + (+8) - (-4)?", opciones: ["-3", "-11", "+11", "+3"], correcta: 0 },
                { pregunta: "3. Evalúa la expresión: 20 - 3 × (4 + 2) ÷ 2", opciones: ["51", "11", "14", "9"], correcta: 1 },
                { pregunta: "4. Si 5 kg de maíz cuestan $85.00, ¿cuál es la constante de proporcionalidad (precio unitario)?", opciones: ["15", "17", "19", "16.5"], correcta: 1 },
                { pregunta: "5. Resuelve para x: 5x + 12 = 3x + 28", opciones: ["x = 6", "x = 8", "x = 10", "x = 4"], correcta: 1 }
            ]
        },
        "Ciencias I: Biología y Biodiversidad": {
            lecciones: [
                {
                    titulo: "Lección 1: La célula como unidad estructural y funcional de los seres vivos",
                    aprendizaje: "Identifica a la célula como la unidad estructural de los seres vivos y comprende sus funciones vitales.",
                    contenido: `
                        <h4>1. Postulados de la Teoría Celular</h4>
                        <p>Formulada en el siglo XIX por Schleiden, Schwann y Virchow, la Teoría Celular establece tres principios rectores de la biología moderna: 1) Todos los organismos vivos están compuestos por una o más células (unidad anatómica); 2) En el interior de la célula ocurren todas las reacciones metabólicas de la vida (unidad fisiológica); y 3) Toda célula proviene de otra célula preexistente mediante la división celular (unidad de origen).</p>
                        <h4>2. Clasificación: Células procariotas y eucariotas</h4>
                        <p>Las <strong>células procariotas</strong> (como las bacterias y arqueas) carecen de un núcleo definido, por lo que su material genético (ADN) se encuentra libre en el citoplasma en una región llamada nucleoide. Por el contrario, las <strong>células eucariotas</strong> (presentes en protozoarios, hongos, plantas y animales) poseen un núcleo verdadero delimitado por una membrana nuclear y diversos organelos especializados.</p>
                    `,
                    glosario: "Organelo: Estructura subcelular que desempeña una función específica (ej. mitocondria, cloroplasto)."
                },
                {
                    titulo: "Lección 2: Estructura y función de los organelos celulares (Animal vs Vegetal)",
                    aprendizaje: "Diferencia entre células animales y vegetales identificando sus organelos principales.",
                    contenido: `
                        <h4>1. Componentes fundamentales de la célula eucariota</h4>
                        <p>Toda célula eucariota consta de <strong>membrana plasmática</strong> (regula la entrada y salida de sustancias), <strong>citoplasma</strong> (medio acuoso interno) y <strong>núcleo</strong> (centro de control genético). En el citoplasma destacan las <strong>mitocondrias</strong>, encargadas de la respiración celular para producir energía química en forma de ATP, y los <strong>ribosomas</strong>, responsables de la síntesis de proteínas.</p>
                        <h4>2. Estructuras exclusivas de la célula vegetal</h4>
                        <p>Las células de las plantas poseen tres estructuras ausentes en las células animales: una <strong>pared celular</strong> rígida de celulosa que brinda soporte mecánico, una <strong>gran vacuola central</strong> que almacena agua y mantiene la turgencia, y los <strong>cloroplastos</strong>, organelos que contienen clorofila para realizar la fotosíntesis.</p>
                    `,
                    glosario: "Cloroplasto: Organelo vegetal que capta energía luminosa y la transforma en energía química (glucosa)."
                },
                {
                    titulo: "Lección 3: Biodiversidad en México y factores de megadiversidad",
                    aprendizaje: "Explica la importancia ética, estética, ecológica y cultural de la biodiversidad en México.",
                    contenido: `
                        <h4>1. México como país megadiverso</h4>
                        <p>México forma parte del selecto grupo de 17 países megadiversos del planeta, albergando entre el 10% y el 12% de todas las especies conocidas a nivel mundial. Esta riqueza biológica se debe a su posición geográfica entre las regiones Neártica y Neotropical, su complejo relieve montañoso (Sierras Madre) y la variedad de climas que van desde desiertos áridos hasta selvas húmedas en Chiapas y Oaxaca.</p>
                        <h4>2. Especies endémicas y conservación</h4>
                        <p>Una especie <strong>endémica</strong> es aquella que habita de forma natural exclusivamente en una región geográfica determinada, como el ajolote (Ambystoma mexicanum) en Xochimilco o la vaquita marina en el Alto Golfo de California.</p>
                    `,
                    glosario: "Endemismo: Distribución biológica restringida a una zona geográfica específica."
                },
                {
                    titulo: "Lección 4: Cadenas tróficas, flujo de energía y ciclos biogeoquímicos",
                    aprendizaje: "Representa las transformaciones de energía en los ecosistemas en función de la fuente primaria y las cadenas tróficas.",
                    contenido: `
                        <h4>1. Niveles tróficos en el ecosistema</h4>
                        <p>La energía fluye en los ecosistemas de forma unidireccional a partir del Sol. Los <strong>productores</strong> (organismos autótrofos como plantas y algas) transforman la energía solar en biomasa mediante la fotosíntesis. Los <strong>consumidores primarios</strong> (herbívoros), <strong>secundarios</strong> (carnívoros) y <strong>terciarios</strong> (depredadores tope) obtienen energía al alimentarse de otros seres, mientras que los <strong>descomponedores</strong> (hongos y bacterias) reintegran la materia inorgánica al suelo.</p>
                    `,
                    glosario: "Autótrofo: Organismo capaz de elaborar su propio alimento a partir de sustancias inorgánicas."
                },
                {
                    titulo: "Lección 5: Sistema nervioso y coordinación del cuerpo humano",
                    aprendizaje: "Explica la coordinación del sistema nervioso en el funcionamiento del cuerpo humano.",
                    contenido: `
                        <h4>1. División anatómica: Sistema Nervioso Central y Periférico</h4>
                        <p>El sistema nervioso coordina todas las funciones conscientes e inconscientes del organismo mediante impulsos electroquímicos transmitidos por las <strong>neuronas</strong>. Se divide en el <strong>Sistema Nervioso Central (SNC)</strong>, integrado por el encéfalo (cerebro, cerebelo y bulbo raquídeo) y la médula espinal; y el <strong>Sistema Nervioso Periférico (SNP)</strong>, que conecta los receptores sensoriales con los órganos efectores.</p>
                    `,
                    glosario: "Sinapsis: Comunicación funcional entre dos neuronas mediante neurotransmisores."
                }
            ],
            tareas: [
                { pregunta: "1. ¿Qué organelo celular se encarga de producir energía (ATP) mediante la respiración celular?", opciones: ["Ribosoma", "Mitocondria", "Aparato de Golgi", "Lisosoma"], correcta: 1 },
                { pregunta: "2. ¿Cuál de las siguientes estructuras es exclusiva de la célula vegetal?", opciones: ["Membrana plasmática", "Mitocondria", "Pared celular y cloroplastos", "Núcleo"], correcta: 2 },
                { pregunta: "3. En una cadena alimentaria, los hongos y bacterias actúan principalmente como:", opciones: ["Productores primarios", "Consumidores primarios", "Descomponedores", "Depredadores tope"], correcta: 2 }
            ],
            examen: [
                { pregunta: "1. Característica principal de las células procariotas (como las bacterias):", opciones: ["Poseen cloroplastos", "Su ADN no está encerrado en un núcleo", "Son más grandes que las eucariotas", "Forman tejidos animales"], correcta: 1 },
                { pregunta: "2. ¿Qué pigmento presente en los cloroplastos permite captar la luz solar para la fotosíntesis?", opciones: ["Hemoglobina", "Melanina", "Clorofila", "Queratina"], correcta: 2 },
                { pregunta: "3. ¿Cómo se denomina a una especie que habita únicamente en una región geográfica específica?", opciones: ["Cosmopolita", "Invasora", "Endémica", "Migratoria"], correcta: 2 },
                { pregunta: "4. ¿Qué porcentaje aproximado de la energía pasa de un nivel trófico al siguiente (Ley del diezmo ecológico)?", opciones: ["90%", "50%", "10%", "100%"], correcta: 2 },
                { pregunta: "5. Órgano del Sistema Nervioso Central encargado del equilibrio y la coordinación motriz fina:", opciones: ["Cerebelo", "Médula espinal", "Hipotálamo", "Páncreas"], correcta: 0 }
            ]
        },
        "Historia I y Geografía de México": {
            lecciones: [
                {
                    titulo: "Lección 1: El espacio geográfico y sus componentes naturales y sociales",
                    aprendizaje: "Explica relaciones entre la sociedad y la naturaleza en diferentes lugares del mundo a partir de los componentes del espacio geográfico.",
                    contenido: `
                        <h4>1. Los cinco componentes del espacio geográfico</h4>
                        <p>El espacio geográfico es el entorno modificado por las sociedades humanas a lo largo del tiempo. Para su estudio sistemático se divide en cinco componentes interrelacionados: <strong>Naturales</strong> (relieve, clima, hidrografía, vegetación), <strong>Sociales</strong> (demografía, migración, distribución poblacional), <strong>Culturales</strong> (lenguas, tradiciones, religión), <strong>Económicos</strong> (agricultura, industria, comercio) y <strong>Políticos</strong> (fronteras, formas de gobierno y leyes).</p>
                    `,
                    glosario: "Coordenadas geográficas: Red de paralelos (latitud) y meridianos (longitud) para localizar cualquier punto terrestre."
                },
                {
                    titulo: "Lección 2: Placas tectónicas, sismicidad y vulcanismo en México",
                    aprendizaje: "Explica la relación entre la distribución de los tipos de relieve y las regiones sísmicas y volcánicas.",
                    contenido: `
                        <h4>1. Dinámica de la corteza terrestre en el territorio nacional</h4>
                        <p>El territorio mexicano se asienta sobre cinco placas tectónicas: la Placa Norteamericana, la del Pacífico, la de Rivera, la del Caribe y la <strong>Placa de Cocos</strong>. La subducción de la Placa de Cocos por debajo de la Placa Norteamericana frente a las costas de Guerrero, Oaxaca y Chiapas origina la intensa actividad sísmica del sur y centro del país, así como el Sistema Volcánico Transversal.</p>
                    `,
                    glosario: "Subducción: Proceso en el que una placa tectónica oceánica se hunde bajo otra placa continental."
                },
                {
                    titulo: "Lección 3: Regiones bioclimáticas y cuencas hidrológicas nacionales",
                    aprendizaje: "Analiza la distribución de las aguas continentales y su relación con las regiones naturales.",
                    contenido: `
                        <h4>1. Vertientes hidrográficas de México</h4>
                        <p>El escurrimiento superficial del agua en México se divide en tres grandes vertientes: la <strong>Vertiente del Pacífico</strong> (ríos Balsas, Lerma-Santiago), la <strong>Vertiente del Golfo de México</strong> (que concentra el mayor caudal del país con los sistemas Grijalva-Usumacinta y Papaloapan) y la <strong>Vertiente Interior o Endorreica</strong> (como la Comarca Lagunera).</p>
                    `,
                    glosario: "Cuenca endorreica: Área en la que los ríos no tienen salida al mar y desembocan en lagos interiores."
                },
                {
                    titulo: "Lección 4: Revolución Industrial e Ilustración en el mundo moderno",
                    aprendizaje: "Reconoce la importancia de la Ilustración y la Revolución Industrial en la transformación del mundo.",
                    contenido: `
                        <h4>1. El Siglo de las Luces y la máquina de vapor</h4>
                        <p>Durante el siglo XVIII, el pensamiento ilustrado europeo promovió el uso de la razón, la división de poderes (Montesquieu) y la soberanía popular (Rousseau). Paralelamente, en Gran Bretaña inició la <strong>Primera Revolución Industrial</strong>, impulsada por la máquina de vapor de James Watt y la mecanización textil, cambiando la economía agraria por una urbana e industrial.</p>
                    `,
                    glosario: "División de poderes: Organización del Estado en Ejecutivo, Legislativo y Judicial."
                },
                {
                    titulo: "Lección 5: Patrimonio cultural y diversidad lingüística de los pueblos indígenas",
                    aprendizaje: "Valora la diversidad cultural y lingüística de los pueblos originarios de México.",
                    contenido: `
                        <h4>1. Las 68 agrupaciones lingüísticas de México</h4>
                        <p>De acuerdo con el Instituto Nacional de Lenguas Indígenas (INALI), en México se hablan 68 lenguas indígenas nacionales (como el náhuatl, maya, tseltal, tsotsil, mixteco y zapoteco) agrupadas en 11 familias lingüísticas, lo que convierte a la nación en una de las de mayor riqueza pluricultural del continente americano.</p>
                    `,
                    glosario: "Nación pluricultural: Estado conformado por múltiples culturas y pueblos originarios con derechos reconocidos."
                }
            ],
            tareas: [
                { pregunta: "1. ¿Qué placa tectónica entra en subducción frente a las costas de Oaxaca y Chiapas provocando alta sismicidad?", opciones: ["Placa de Nazca", "Placa de Cocos", "Placa Euroasiática", "Placa Africana"], correcta: 1 },
                { pregunta: "2. ¿Cuál es el sistema fluvial más caudaloso de México, ubicado en la vertiente del Golfo?", opciones: ["Río Bravo", "Sistema Grijalva-Usumacinta", "Río Colorado", "Río Nazas"], correcta: 1 },
                { pregunta: "3. Pensador ilustrado que propuso la división del poder público en Ejecutivo, Legislativo y Judicial:", opciones: ["Montesquieu", "James Watt", "Isaac Newton", "Napoleón"], correcta: 0 }
            ],
            examen: [
                { pregunta: "1. El relieve, el clima y los ríos pertenecen al componente del espacio geográfico denominado:", opciones: ["Social", "Político", "Natural", "Económico"], correcta: 2 },
                { pregunta: "2. El choque por subducción entre la Placa de Cocos y la Norteamericana dio origen a:", opciones: ["La Península de Yucatán", "La Trinchera Mesoamericana y el vulcanismo", "El Golfo de California", "La Llanura Costera del Norte"], correcta: 1 },
                { pregunta: "3. Invento clave que impulsó la Primera Revolución Industrial en Inglaterra en el siglo XVIII:", opciones: ["El motor eléctrico", "La máquina de vapor", "El telégrafo inalámbrico", "La imprenta"], correcta: 1 },
                { pregunta: "4. ¿Cuántas agrupaciones lingüísticas indígenas reconoce oficialmente el INALI en México?", opciones: ["15", "32", "68", "120"], correcta: 2 },
                { pregunta: "5. Coordenada geográfica que mide la distancia angular de cualquier punto terrestre respecto al Ecuador:", opciones: ["Altitud", "Longitud", "Latitud", "Escala"], correcta: 2 }
            ]
        }
    },

    "2° de Secundaria": {
        "Ciencias II: Física Fundamental": {
            lecciones: [
                {
                    titulo: "Lección 1: Cinemática: Movimiento Rectilíneo Uniforme (MRU) y Aceleración",
                    aprendizaje: "Comprende los conceptos de velocidad y aceleración y diferencia entre rapidez y velocidad.",
                    contenido: `
                        <h4>1. Distancia vs. Desplazamiento y Rapidez vs. Velocidad</h4>
                        <p>En física, la <strong>distancia</strong> es una magnitud escalar que mide la longitud total de la trayectoria recorrida por un móvil, mientras que el <strong>desplazamiento</strong> es una magnitud vectorial que une en línea recta el punto inicial con el punto final. De igual modo, la rapidez (v = d / t) es escalar, y la velocidad incluye dirección y sentido.</p>
                        <h4>2. Aceleración media</h4>
                        <p>Cuando la velocidad de un cuerpo varía respecto al tiempo, existe una <strong>aceleración</strong>, expresada matemáticamente como a = (vf - vi) / t, cuya unidad en el Sistema Internacional es el metro por segundo al cuadrado (m/s²).</p>
                    `,
                    glosario: "Vector: Magnitud física definida por un valor numérico, unidad, dirección y sentido."
                },
                {
                    titulo: "Lección 2: Las tres Leyes del Movimiento de Isaac Newton",
                    aprendizaje: "Identifica y describe la presencia de fuerzas en interacciones cotidianas mediante las Leyes de Newton.",
                    contenido: `
                        <h4>1. Primera Ley (Inercia) y Segunda Ley (Dinámica)</h4>
                        <p>La <strong>Primera Ley de Newton</strong> postula que todo cuerpo permanece en estado de reposo o de movimiento rectilíneo uniforme a menos que una fuerza externa neta actúe sobre él. La <strong>Segunda Ley</strong> establece que la aceleración que adquiere un objeto es directamente proporcional a la fuerza neta aplicada e inversamente proporcional a su masa (<strong>F = m · a</strong>), midiéndose la fuerza en Newtons (N).</p>
                        <h4>2. Tercera Ley (Acción y Reacción)</h4>
                        <p>A toda fuerza de acción le corresponde una fuerza de reacción de igual magnitud y dirección, pero de sentido opuesto.</p>
                    `,
                    glosario: "Newton (N): Fuerza necesaria para proporcionar una aceleración de 1 m/s² a una masa de 1 kg."
                },
                {
                    titulo: "Lección 3: Energía Mecánica: Cinética, Potencial y su Conservación",
                    aprendizaje: "Analiza la energía mecánica (cinética y potencial) y describe casos donde se conserva.",
                    contenido: `
                        <h4>1. Expresiones matemáticas de la energía</h4>
                        <p>La <strong>energía cinética (Ec)</strong> es aquella asociada al movimiento de los cuerpos y se calcula mediante Ec = ½ · m · v². Por su parte, la <strong>energía potencial gravitatoria (Ep)</strong> depende de la altura a la que se encuentra un objeto: Ep = m · g · h (donde g ≈ 9.81 m/s²). En ausencia de fricción, la suma de ambas (Energía Mecánica Total) permanece constante.</p>
                    `,
                    glosario: "Joule (J): Unidad de medida para la energía y el trabajo mecánico en el Sistema Internacional."
                },
                {
                    titulo: "Lección 4: Termodinámica: Calor, Temperatura y Escalas Termométricas",
                    aprendizaje: "Describe los motores que funcionan con energía calorífica y diferencia calor de temperatura.",
                    contenido: `
                        <h4>1. Diferencia entre calor y temperatura</h4>
                        <p>La <strong>temperatura</strong> es la medida del promedio de la energía cinética de las partículas de una sustancia (se mide en °C, °F o Kelvin), mientras que el <strong>calor</strong> es la energía térmica en tránsito que fluye espontáneamente del cuerpo de mayor temperatura hacia el de menor temperatura hasta alcanzar el equilibrio térmico. Para convertir grados Celsius a Kelvin se emplea: K = °C + 273.15.</p>
                    `,
                    glosario: "Equilibrio térmico: Estado en el cual dos cuerpos en contacto igualan sus temperaturas."
                },
                {
                    titulo: "Lección 5: Electricidad, Magnetismo y la Ley de Ohm",
                    aprendizaje: "Describe, explica y experimenta con algunas manifestaciones y aplicaciones de la electricidad.",
                    contenido: `
                        <h4>1. Corriente eléctrica y Ley de Ohm</h4>
                        <p>La corriente eléctrica (I, medida en Amperes) es el flujo de electrones a través de un material conductor impulsado por una diferencia de potencial o voltaje (V, en Volts) y limitado por la oposición del material llamada resistencia (R, en Ohms Ω). La <strong>Ley de Ohm</strong> relaciona estas tres variables mediante la ecuación: <strong>I = V / R</strong>.</p>
                    `,
                    glosario: "Conductores: Materiales con baja resistencia al paso de la corriente eléctrica (cobre, plata, aluminio)."
                }
            ],
            tareas: [
                { pregunta: "1. ¿Qué fuerza en Newtons se requiere para acelerar un objeto de 12 kg a razón de 4 m/s² (F = m·a)?", opciones: ["3 N", "16 N", "48 N", "36 N"], correcta: 2 },
                { pregunta: "2. Según la Ley de Ohm (I = V / R), ¿qué corriente circula por una resistencia de 5 Ω conectada a 20 V?", opciones: ["4 Amperes", "100 Amperes", "0.25 Amperes", "15 Amperes"], correcta: 0 },
                { pregunta: "3. ¿A cuántos Kelvin equivalen 27 °C (K = °C + 273.15)?", opciones: ["246.15 K", "300.15 K", "273.15 K", "100 K"], correcta: 1 }
            ],
            examen: [
                { pregunta: "1. Un automóvil recorre 180 km en 2 horas. ¿Cuál es su rapidez media?", opciones: ["60 km/h", "90 km/h", "360 km/h", "80 km/h"], correcta: 1 },
                { pregunta: "2. Propiedad de la materia de oponerse a cambiar su estado de reposo o movimiento (1ª Ley de Newton):", opciones: ["Gravedad", "Fricción", "Inercia", "Potencia"], correcta: 2 },
                { pregunta: "3. Tipo de energía que posee una roca de 5 kg situada en reposo a 10 metros de altura:", opciones: ["Energía cinética", "Energía potencial gravitatoria", "Energía radiante", "Energía eólica"], correcta: 1 },
                { pregunta: "4. Forma de transferencia de calor que ocurre a través de sólidos por contacto directo sin transporte de materia:", opciones: ["Convección", "Radiación", "Conducción", "Evaporación"], correcta: 2 },
                { pregunta: "5. Unidad del Sistema Internacional utilizada para medir la resistencia eléctrica:", opciones: ["Volt (V)", "Ampere (A)", "Ohm (Ω)", "Watt (W)"], correcta: 2 }
            ]
        },
        "Matemáticas II: Sistemas de Ecuaciones y Geometría": {
            lecciones: [
                {
                    titulo: "Lección 1: Leyes de los exponentes y notación científica",
                    aprendizaje: "Resuelve problemas de potencias con exponente entero y aproxima raíces cuadradas.",
                    contenido: `
                        <h4>1. Operaciones con potencias de la misma base</h4>
                        <p>Al multiplicar potencias de la misma base, la base se conserva y los exponentes se suman (aᵐ · aⁿ = aᵐ⁺ⁿ). Al dividir potencias de la misma base, los exponentes se restan (aᵐ / aⁿ = aᵐ⁻ⁿ). Asimismo, toda cantidad distinta de cero elevada al exponente cero es igual a la unidad (a⁰ = 1).</p>
                    `,
                    glosario: "Notación científica: Expresión de números muy grandes o pequeños como producto de un número entre 1 y 10 por una potencia de 10."
                },
                {
                    titulo: "Lección 2: Sistemas de dos ecuaciones lineales con dos incógnitas (2x2)",
                    aprendizaje: "Resuelve problemas mediante la formulación y solución algebraica de sistemas de dos ecuaciones lineales con dos incógnitas.",
                    contenido: `
                        <h4>1. Métodos analíticos de resolución</h4>
                        <p>Un sistema 2x2 busca el par ordenado (x, y) que satisface simultáneamente ambas igualdades. Los tres métodos algebraicos principales son: <strong>Método de Sustitución</strong> (despejar una incógnita en una ecuación y sustituirla en la otra), <strong>Método de Igualación</strong> (despejar la misma incógnita en ambas ecuaciones e igualar los resultados) y <strong>Método de Reducción o Suma y Resta</strong> (multiplicar las ecuaciones para eliminar una variable).</p>
                    `,
                    glosario: "Sistema compatible determinado: Aquel que posee una solución única (las rectas se cortan en un punto)."
                },
                {
                    titulo: "Lección 3: Proporcionalidad inversa y variación lineal",
                    aprendizaje: "Resuelve problemas de proporcionalidad directa e inversa y de reparto proporcional.",
                    contenido: `
                        <h4>1. Comportamiento inversamente proporcional</h4>
                        <p>Dos magnitudes son <strong>inversamente proporcionales</strong> cuando al aumentar una al doble o triple, la otra disminuye a la mitad o a la tercera parte. En este caso, el producto de ambas cantidades permanece constante (x · y = k). Un ejemplo clásico es la relación entre el número de trabajadores y el tiempo requerido para levantar un muro.</p>
                    `,
                    glosario: "Hipérbola: Curva que representa gráficamente una relación de proporcionalidad inversa en el plano cartesiano."
                },
                {
                    titulo: "Lección 4: Ángulos interiores y exteriores de polígonos regulares",
                    aprendizaje: "Deduce y usa las relaciones entre los ángulos de polígonos en la construcción de polígonos regulares.",
                    contenido: `
                        <h4>1. Triangulación y suma de ángulos internos</h4>
                        <p>Cualquier polígono convexo de <em>n</em> lados puede dividirse en (n - 2) triángulos trazando diagonales desde un mismo vértice. Como la suma de los ángulos internos de un triángulo es 180°, la suma de los ángulos interiores de cualquier polígono se calcula con la fórmula: <strong>S = 180° · (n - 2)</strong>.</p>
                    `,
                    glosario: "Polígono regular: Figura plana cuyos lados y ángulos interiores son todos iguales entre sí."
                },
                {
                    titulo: "Lección 5: Volumen de prismas rectos y cilindros circulares",
                    aprendizaje: "Calcula el volumen de prismas y cilindros rectos.",
                    contenido: `
                        <h4>1. Área de la base por la altura</h4>
                        <p>El volumen de cualquier prisma recto o cilindro se obtiene multiplicando el área de su base (Ab) por su altura (h): <strong>V = Ab · h</strong>. En el caso particular del cilindro circular recto, dado que su base es un círculo de área π · r², su volumen queda determinado por <strong>V = π · r² · h</strong>.</p>
                    `,
                    glosario: "Capacidad: Equivalencia entre el volumen geométrico y el contenido líquido (1 decímetro cúbico = 1 litro)."
                }
            ],
            tareas: [
                { pregunta: "1. Simplifica la expresión aplicando leyes de los exponentes: (x⁵ · x³) / x²", opciones: ["x⁶", "x¹⁰", "x⁴", "x⁷"], correcta: 0 },
                { pregunta: "2. ¿Cuál es la suma de los ángulos interiores de un hexágono (n = 6) usando 180°(n - 2)?", opciones: ["540°", "720°", "900°", "360°"], correcta: 1 },
                { pregunta: "3. En el sistema x + y = 10 y x - y = 4, ¿cuáles son los valores de x e y?", opciones: ["x = 6, y = 4", "x = 7, y = 3", "x = 8, y = 2", "x = 5, y = 5"], correcta: 1 }
            ],
            examen: [
                { pregunta: "1. ¿A qué equivale cualquier número real distinto de cero elevado a la potencia cero (a⁰)?", opciones: ["0", "1", "El mismo número a", "Indefinido"], correcta: 1 },
                { pregunta: "2. Si 4 albañiles terminan una barda en 12 días, ¿cuántos días tardarán 6 albañiles trabajando al mismo ritmo?", opciones: ["18 días", "8 días", "6 días", "9 días"], correcta: 1 },
                { pregunta: "3. ¿Cuántos triángulos se forman al trazar las diagonales desde un vértice en un octágono (n = 8)?", opciones: ["8 triángulos", "6 triángulos", "5 triángulos", "4 triángulos"], correcta: 1 },
                { pregunta: "4. Calcula el volumen de un prisma rectangular cuya base mide 5 cm por 4 cm y tiene una altura de 10 cm:", opciones: ["90 cm³", "200 cm³", "100 cm³", "400 cm³"], correcta: 1 },
                { pregunta: "5. ¿Cuántos litros de agua caben exactamente en un recipiente con volumen de 1 metro cúbico (1 m³)?", opciones: ["10 litros", "100 litros", "1,000 litros", "10,000 litros"], correcta: 2 }
            ]
        },
        "Historia II: Civilizaciones Mesoamericanas y Virreinato": {
            lecciones: [
                {
                    titulo: "Lección 1: Áreas culturales: Aridoamérica, Oasisamérica y Mesoamérica",
                    aprendizaje: "Reconoce la ubicación de las áreas culturales que conformaron el México antiguo.",
                    contenido: `
                        <h4>1. Rasgos geográficos y culturales de Mesoamérica</h4>
                        <p>El antropólogo Paul Kirchhoff definió a <strong>Mesoamérica</strong> como la superárea cultural comprendida desde el centro-occidente de México hasta Centroamérica, caracterizada por tierras fértiles, agricultura intensiva del maíz (sistema de milpa y chinampas), construcción de basamentos piramidales, escritura jeroglífica, juego de pelota y el uso de dos calendarios (uno solar de 365 días y otro ritual de 260 días).</p>
                    `,
                    glosario: "Chinampa: Sistema agrícola mesoamericano de islotes artificiales construidos sobre lagos someros."
                },
                {
                    titulo: "Lección 2: Horizontes Preclásico, Clásico y Posclásico (Olmecas, Mayas y Mexicas)",
                    aprendizaje: "Identifica las características de los periodos Preclásico, Clásico y Posclásico.",
                    contenido: `
                        <h4>1. Evolución histórica de las civilizaciones mesoamericanas</h4>
                        <p>En el <strong>Periodo Preclásico</strong> (2500 a.C. - 200 d.C.) floreció la cultura <strong>Olmeca</strong> ("cultura madre") en Veracruz y Tabasco (La Venta, Tres Zapotes). Durante el <strong>Periodo Clásico</strong> (200 - 900 d.C.) alcanzaron su esplendor Teotihuacán, Monte Albán (zapotecos) y las ciudades-estado <strong>Mayas</strong> como Palenque y Tikal. Finalmente, en el <strong>Posclásico</strong> (900 - 1521 d.C.) predominaron sociedades militaristas como los Toltecas y los <strong>Mexicas</strong>, fundadores de México-Tenochtitlan en 1325.</p>
                    `,
                    glosario: "Tributo: Entrega obligatoria de bienes o trabajo que los pueblos sometidos pagaban a la Triple Alianza."
                },
                {
                    titulo: "Lección 3: La caída de Tenochtitlan y el proceso de colonización",
                    aprendizaje: "Reflexiona sobre las causas y consecuencias de la conquista de México-Tenochtitlan.",
                    contenido: `
                        <h4>1. Alianzas indígenas y epidemias</h4>
                        <p>La caída de México-Tenochtitlan el 13 de agosto de 1521 no fue obra exclusiva de la hueste española de Hernán Cortés, sino el resultado de dos factores determinantes: la alianza militar con señoríos indígenas enemigos de los mexicas (como los tlaxcaltecas y totonacas) y la epidemia de viruela de 1520, enfermedad ante la cual la población originaria carecía de defensas inmunológicas.</p>
                    `,
                    glosario: "Evangelización: Proceso de conversión religiosa de los pueblos indígenas al cristianismo católico por órdenes mendicantes."
                },
                {
                    titulo: "Lección 4: Instituciones políticas y económicas del Virreinato de Nueva España",
                    aprendizaje: "Identifica las instancias de la autoridad española: virrey, audiencia y corregidores.",
                    contenido: `
                        <h4>1. Organización del gobierno virreinal y la minería</h4>
                        <p>En 1535 se estableció formalmente el <strong>Virreinato de la Nueva España</strong> con Antonio de Mendoza como primer virrey, representante directo de la Corona española. La actividad económica articuladora fue la <strong>minería de plata</strong> (Zacatecas, Guanajuato, Taxco), complementada por las haciendas agrícolas, los obrajes textiles y el comercio transpacífico a través del Galeón de Manila (Nao de China) que llegaba al puerto de Acapulco.</p>
                    `,
                    glosario: "Real Audiencia: Máximo tribunal judicial y órgano consultivo de gobierno en la Nueva España."
                },
                {
                    titulo: "Lección 5: Las Reformas Borbónicas y la crisis del orden colonial",
                    aprendizaje: "Reconoce las causas de la desigualdad social y las consecuencias de las Reformas Borbónicas.",
                    contenido: `
                        <h4>1. Reorganización administrativa en el siglo XVIII</h4>
                        <p>Con el ascenso de la dinastía de los Borbones al trono español, especialmente bajo el reinado de Carlos III, se aplicaron las <strong>Reformas Borbónicas</strong> para recuperar el control político y aumentar la recaudación fiscal: se dividió el territorio en 12 Intendencias, se expulsó a la Compañía de Jesús en 1767 y se desplazó a los criollos de los altos cargos públicos, alimentando el nacionalismo criollo que detonaría la Independencia en 1810.</p>
                    `,
                    glosario: "Criollo: Hijo de padres españoles nacido en el continente americano."
                }
            ],
            tareas: [
                { pregunta: "1. ¿Cuál es considerada la 'Cultura Madre' del periodo Preclásico mesoamericano?", opciones: ["Cultura Mexica", "Cultura Olmeca", "Cultura Purépecha", "Cultura Tolteca"], correcta: 1 },
                { pregunta: "2. ¿Qué actividad económica fue el motor principal de la economía en la Nueva España?", opciones: ["La pesca ribereña", "La minería de plata", "La industria automotriz", "La silvicultura"], correcta: 1 },
                { pregunta: "3. Orden religiosa expulsada de todos los dominios españoles en 1767 como parte de las Reformas Borbónicas:", opciones: ["Franciscanos", "Dominicos", "Jesuitas (Compañía de Jesús)", "Agustinos"], correcta: 2 }
            ],
            examen: [
                { pregunta: "1. Superárea cultural del México antiguo caracterizada por el cultivo intensivo del maíz y pirámides escalonadas:", opciones: ["Aridoamérica", "Oasisamérica", "Mesoamérica", "Patagonia"], correcta: 2 },
                { pregunta: "2. ¿En qué periodo histórico florecieron las grandes ciudades de Teotihuacán, Monte Albán y Palenque?", opciones: ["Periodo Preclásico", "Periodo Clásico", "Periodo Posclásico", "Periodo Virreinal"], correcta: 1 },
                { pregunta: "3. Factor biológico decisivo que diezmó a la población de Tenochtitlan en 1520 durante el sitio militar:", opciones: ["La epidemia de viruela", "El cólera morbus", "La fiebre amarilla", "La gripe española"], correcta: 0 },
                { pregunta: "4. Ruta comercial marítima que conectaba el puerto de Acapulco con Filipinas y Asia durante el Virreinato:", opciones: ["La Flota de Veracruz", "El Galeón de Manila (Nao de China)", "El Canal de Panamá", "La Ruta de la Seda"], correcta: 1 },
                { pregunta: "5. Grupo social de la Nueva España que encabezó el movimiento de Independencia tras ser desplazado por las Reformas Borbónicas:", opciones: ["Peninsulares", "Criollos", "Encomenderos", "Virreyes"], correcta: 1 }
            ]
        }
    },

    "3° de Secundaria": {
        "Ciencias III: Química y Estructura de la Materia": {
            lecciones: [
                {
                    titulo: "Lección 1: Propiedades intensivas y extensivas de la materia y métodos de separación",
                    aprendizaje: "Identifica las propiedades extensivas e intensivas de la materia y deduce métodos para separar mezclas.",
                    contenido: `
                        <h4>1. Clasificación de las propiedades físicas</h4>
                        <p>Las <strong>propiedades extensivas</strong> dependen directamente de la cantidad de materia presente en el cuerpo, tales como la masa y el volumen. Por el contrario, las <strong>propiedades intensivas (o específicas)</strong> no dependen de la cantidad de muestra y permiten identificar sustancias puras: entre ellas destacan la densidad (ρ = m / V), el punto de ebullición, el punto de fusión, la viscosidad y la solubilidad.</p>
                        <h4>2. Separación de mezclas homogéneas y heterogéneas</h4>
                        <p>Para separar mezclas heterogéneas se emplean la <strong>filtración</strong>, <strong>decantación</strong> y <strong>tamizado</strong>; mientras que para mezclas homogéneas (disoluciones) se recurre a la <strong>destilación</strong> (basada en distintos puntos de ebullición), <strong>cristalización</strong> y <strong>cromatografía</strong>.</p>
                    `,
                    glosario: "Densidad: Relación entre la masa de un cuerpo y el volumen que ocupa (g/cm³ o kg/m³)."
                },
                {
                    titulo: "Lección 2: Ley de Conservación de la Masa de Lavoisier y Modelos Atómicos",
                    aprendizaje: "Argumenta la importancia del trabajo de Lavoisier y comprende la estructura del átomo.",
                    contenido: `
                        <h4>1. Revolución química y estructura subatómica</h4>
                        <p>Antoine Laurent de Lavoisier demostró mediante mediciones precisas en sistemas cerrados que <em>"en toda reacción química, la masa no se crea ni se destruye, solo se transforma"</em>. Posteriormente, el modelo atómico de <strong>Niels Bohr</strong> explicó que el átomo consta de un núcleo central con <strong>protones</strong> (carga positiva) y <strong>neutrones</strong> (carga neutra), rodeado por <strong>electrones</strong> (carga negativa) que giran en órbitas o niveles definidos de energía.</p>
                    `,
                    glosario: "Electrones de valencia: Electrones ubicados en la capa más externa del átomo que participan en los enlaces químicos."
                },
                {
                    titulo: "Lección 3: La Tabla Periódica de Mendeleiev: Grupos, Periodos y Número Atómico",
                    aprendizaje: "Identifica la información de la tabla periódica, analiza sus regularidades y su importancia en la organización de los elementos.",
                    contenido: `
                        <h4>1. Organización actual de los 118 elementos químicos</h4>
                        <p>En la Tabla Periódica moderna, los elementos se ordenan de forma creciente según su <strong>número atómico (Z)</strong>, el cual indica la cantidad exacta de protones en el núcleo. Las 7 filas horizontales se denominan <strong>Periodos</strong> (indican el número de niveles de energía) y las 18 columnas verticales se llaman <strong>Grupos o Familias</strong> (elementos con igual número de electrones de valencia y propiedades químicas semejantes).</p>
                    `,
                    glosario: "Masa atómica (A): Suma de protones y neutrones contenidos en el núcleo de un átomo."
                },
                {
                    titulo: "Lección 4: Enlaces químicos (Iónico, Covalente y Metálico) y Regla del Octeto",
                    aprendizaje: "Representa el enlace químico mediante los electrones de valencia a partir de la estructura de Lewis.",
                    contenido: `
                        <h4>1. Mecanismos de unión atómica</h4>
                        <p>De acuerdo con Gilbert N. Lewis, los átomos tienden a completar 8 electrones en su último nivel de energía para alcanzar la estabilidad de un gas noble (Regla del Octeto). En el <strong>enlace iónico</strong> (entre un metal y un no metal, como el NaCl), ocurre una transferencia de electrones formando iones. En el <strong>enlace covalente</strong> (entre dos no metales, como el H₂O o CO₂), los átomos comparten pares de electrones.</p>
                    `,
                    glosario: "Catión: Ion con carga eléctrica positiva por haber cedido electrones. | Anión: Ion con carga negativa por haber ganado electrones."
                },
                {
                    titulo: "Lección 5: Reacciones químicas, balanceo de ecuaciones y escala de pH",
                    aprendizaje: "Representa el cambio químico mediante una ecuación e interpreta la información que contiene.",
                    contenido: `
                        <h4>1. Ecuaciones químicas, ácidos y bases</h4>
                        <p>Una ecuación química representa a los <strong>reactivos</strong> a la izquierda de la flecha y a los <strong>productos</strong> a la derecha. Balancear una ecuación consiste en ajustar los coeficientes estequiométricos para cumplir la Ley de Lavoisier. Asimismo, las disoluciones acuosas se clasifican mediante la <strong>escala de pH</strong> (de 0 a 14): valores menores a 7 son <strong>ácidos</strong>, el 7 es <strong>neutro</strong> y valores mayores a 7 son <strong>básicos o alcalinos</strong>.</p>
                    `,
                    glosario: "Neutralización: Reacción química entre un ácido y una base que produce una sal y agua."
                }
            ],
            tareas: [
                { pregunta: "1. ¿Cuál de las siguientes es una propiedad intensiva de la materia (no depende de la cantidad de muestra)?", opciones: ["Masa", "Volumen", "Punto de ebullición y densidad", "Peso"], correcta: 2 },
                { pregunta: "2. ¿Qué indica el Número Atómico (Z) de un elemento en la Tabla Periódica?", opciones: ["El número de neutrones", "El número de protones en el núcleo", "La temperatura de fusión", "El año de descubrimiento"], correcta: 1 },
                { pregunta: "3. Una sustancia con un valor de pH igual a 2.5 se clasifica químicamente como:", opciones: ["Neutra", "Básica o alcalina", "Ácida", "Gas noble"], correcta: 2 }
            ],
            examen: [
                { pregunta: "1. Método físico ideal para separar una mezcla homogénea de agua y alcohol aprovechando sus distintos puntos de ebullición:", opciones: ["Filtración", "Tamizado", "Destilación", "Imantación"], correcta: 2 },
                { pregunta: "2. Partículas subatómicas que se localizan en el núcleo del átomo y determinan su masa:", opciones: ["Electrones y positrones", "Protones y neutrones", "Solo electrones", "Fotones"], correcta: 1 },
                { pregunta: "3. Tipo de enlace químico que se forma cuando dos átomos no metálicos comparten pares de electrones:", opciones: ["Enlace iónico", "Enlace covalente", "Enlace metálico", "Puente salino"], correcta: 1 },
                { pregunta: "4. En la ecuación balanceada 2H₂ + O₂ → 2H₂O, ¿cuántos átomos de hidrógeno hay en total en los productos?", opciones: ["2 átomos", "4 átomos", "6 átomos", "1 átomo"], correcta: 1 },
                { pregunta: "5. Científico francés que formuló la Ley de la Conservación de la Masa en las reacciones químicas:", opciones: ["Niels Bohr", "Antoine Lavoisier", "Dmitri Mendeleiev", "John Dalton"], correcta: 1 }
            ]
        },
        "Matemáticas III: Ecuaciones Cuadráticas y Trigonometría": {
            lecciones: [
                {
                    titulo: "Lección 1: Ecuaciones cuadráticas y la Fórmula General",
                    aprendizaje: "Resuelve problemas mediante la formulación y solución algebraica de ecuaciones cuadráticas.",
                    contenido: `
                        <h4>1. Estructura de la ecuación de segundo grado</h4>
                        <p>Toda ecuación cuadrática completa tiene la forma canónica <strong>ax² + bx + c = 0</strong>, donde <em>a</em>, <em>b</em> y <em>c</em> son números reales y <em>a ≠ 0</em>. Puede resolverse por factorización o mediante la <strong>Fórmula General</strong>: <strong>x = [ -b ± √(b² - 4ac) ] / 2a</strong>. A la expresión dentro de la raíz (b² - 4ac) se le llama <strong>discriminante</strong>: si es positivo, existen dos soluciones reales distintas; si es cero, una solución real doble; y si es negativo, no tiene soluciones reales.</p>
                    `,
                    glosario: "Parábola: Curva simétrica que representa gráficamente una función cuadrática en el plano cartesiano."
                },
                {
                    titulo: "Lección 2: Criterios de congruencia y semejanza de triángulos (Teorema de Tales)",
                    aprendizaje: "Construye polígonos semejantes. Determina y usa criterios de semejanza de triángulos.",
                    contenido: `
                        <h4>1. Diferencia entre figuras congruentes y semejantes</h4>
                        <p>Dos figuras son <strong>congruentes</strong> cuando tienen exactamente la misma forma y las mismas medidas (criterios LLL, LAL, ALA). En cambio, dos figuras son <strong>semejantes</strong> cuando poseen la misma forma (ángulos interiores iguales) pero sus lados homólogos son proporcionales según una razón de semejanza <em>k</em>.</p>
                    `,
                    glosario: "Lados homólogos: Lados que ocupan la misma posición relativa en dos figuras geométricas semejantes."
                },
                {
                    titulo: "Lección 3: El Teorema de Pitágoras y su aplicación geométrica",
                    aprendizaje: "Formula, justifica y usa el teorema de Pitágoras en la resolución de problemas.",
                    contenido: `
                        <h4>1. Relación entre catetos e hipotenusa</h4>
                        <p>El <strong>Teorema de Pitágoras</strong> es aplicable exclusivamente a los <strong>triángulos rectángulos</strong> (aquellos que poseen un ángulo recto de 90°). Establece que el cuadrado de la longitud de la hipotenusa (<em>c</em>, el lado opuesto al ángulo recto y de mayor longitud) es igual a la suma de los cuadrados de las longitudes de los dos catetos (<em>a</em> y <em>b</em>): <strong>c² = a² + b²</strong>.</p>
                    `,
                    glosario: "Terna pitagórica: Conjunto de tres números enteros positivos que cumplen c² = a² + b² (ej. 3, 4 y 5)."
                },
                {
                    titulo: "Lección 4: Razones trigonométricas: Seno, Coseno y Tangente",
                    aprendizaje: "Resuelve problemas utilizando las razones trigonométricas seno, coseno y tangente.",
                    contenido: `
                        <h4>1. Definición de los cocientes trigonométricos</h4>
                        <p>En todo triángulo rectángulo, para un ángulo agudo de referencia θ, se definen tres razones trigonométricas directas: <strong>Seno (sen θ)</strong> = Cateto Opuesto / Hipotenusa; <strong>Coseno (cos θ)</strong> = Cateto Adyacente / Hipotenusa; y <strong>Tangente (tan θ)</strong> = Cateto Opuesto / Cateto Adyacente. Estas relaciones permiten calcular distancias inaccesibles como la altura de edificios o montañas.</p>
                    `,
                    glosario: "Cateto opuesto: Lado que se encuentra frente al ángulo agudo de referencia seleccionado."
                },
                {
                    titulo: "Lección 5: Estadística descriptiva y probabilidad de eventos independientes",
                    aprendizaje: "Calcula y explica el significado del rango y la desviación media; determina la probabilidad de eventos.",
                    contenido: `
                        <h4>1. Medidas de tendencia central y dispersión</h4>
                        <p>Mientras la media aritmética (promedio), la mediana y la moda indican el centro de un conjunto de datos, el <strong>rango</strong> (valor máximo menos valor mínimo) y la <strong>desviación media</strong> miden qué tan dispersos o separados se encuentran los datos respecto al promedio.</p>
                    `,
                    glosario: "Eventos mutuamente excluyentes: Dos sucesos que no pueden ocurrir de manera simultánea."
                }
            ],
            tareas: [
                { pregunta: "1. ¿Cuáles son las dos soluciones de la ecuación cuadrática x² - 9 = 0?", opciones: ["x₁ = 9, x₂ = -9", "x₁ = 3, x₂ = -3", "x₁ = 3, x₂ = 0", "x₁ = 81, x₂ = -81"], correcta: 1 },
                { pregunta: "2. Si los catetos de un triángulo rectángulo miden 6 cm y 8 cm, ¿cuánto mide su hipotenusa?", opciones: ["14 cm", "10 cm", "12 cm", "100 cm"], correcta: 1 },
                { pregunta: "3. ¿Cómo se define la razón trigonométrica Tangente de un ángulo agudo?", opciones: ["Cateto Opuesto / Hipotenusa", "Cateto Adyacente / Hipotenusa", "Cateto Opuesto / Cateto Adyacente", "Hipotenusa / Cateto Opuesto"], correcta: 2 }
            ],
            examen: [
                { pregunta: "1. En la Fórmula General cuadrática, si el discriminante (b² - 4ac) es igual a cero, la ecuación tiene:", opciones: ["Dos soluciones distintas", "Una única solución real (doble)", "Ninguna solución real", "Infinitas soluciones"], correcta: 1 },
                { pregunta: "2. Dos triángulos que tienen sus tres ángulos iguales y sus lados proporcionales al triple se llaman:", opciones: ["Congruentes", "Semejantes", "Equiláteros", "Asimétricos"], correcta: 1 },
                { pregunta: "3. En un triángulo rectángulo, la hipotenusa mide 13 m y un cateto mide 5 m. ¿Cuánto mide el otro cateto?", opciones: ["8 m", "12 m", "10 m", "14 m"], correcta: 1 },
                { pregunta: "4. Razón trigonométrica equivalente a dividir el Cateto Opuesto entre la Hipotenusa:", opciones: ["Coseno", "Tangente", "Seno", "Secante"], correcta: 2 },
                { pregunta: "5. ¿Cuál es el rango estadístico del conjunto de calificaciones: 6, 8, 9, 10, 7, 10?", opciones: ["4", "8.3", "10", "3"], correcta: 0 }
            ]
        },
        "Historia III: México Independiente, Reforma y Revolución": {
            lecciones: [
                {
                    titulo: "Lección 1: Del México Independiente a la Primera República Federal (1821-1854)",
                    aprendizaje: "Explica las dificultades de México para constituirse como nación independiente.",
                    contenido: `
                        <h4>1. Proyectos de nación: Federalistas contra Centralistas</h4>
                        <p>Tras la consumación de la Independencia el 27 de septiembre de 1821 y el breve Imperio de Agustín de Iturbide, se promulgó la <strong>Constitución Federal de 1824</strong>, siendo Guadalupe Victoria el primer presidente de México. Durante las décadas siguientes, el país enfrentó luchas internas entre federalistas (liberales) y centralistas (conservadores), además de intervenciones extranjeras como la separación de Texas (1836) y la guerra con Estados Unidos (1846-1848), que culminó con la pérdida de más de la mitad del territorio mediante el Tratado de Guadalupe Hidalgo.</p>
                    `,
                    glosario: "Federalismo: Sistema político donde los estados son libres y soberanos en su régimen interior pero unidos en un pacto federal."
                },
                {
                    titulo: "Lección 2: La Reforma Liberal, Constitución de 1857 y Segunda Intervención Francesa",
                    aprendizaje: "Identifica la trascendencia de las Leyes de Reforma y la defensa de la soberanía nacional.",
                    contenido: `
                        <h4>1. Separación entre la Iglesia y el Estado</h4>
                        <p>La generación liberal encabezada por <strong>Benito Juárez</strong>, Melchor Ocampo y Sebastián Lerdo de Tejada promulgó la <strong>Constitución de 1857</strong> y las <strong>Leyes de Reforma</strong>, estableciendo el Registro Civil, la nacionalización de los bienes eclesiásticos y la libertad de cultos. Tras la Guerra de Reforma (1858-1861), el ejército francés invadió México —siendo derrotado inicialmente el 5 de mayo de 1862 en Puebla por Ignacio Zaragoza— e impuso el Segundo Imperio de Maximiliano de Habsburgo hasta el triunfo definitivo de la República en 1867.</p>
                    `,
                    glosario: "Estado laico: Organización política independiente de cualquier confesión u organización religiosa."
                },
                {
                    titulo: "Lección 3: El Porfiriato: Modernización económica y desigualdad social",
                    aprendizaje: "Analiza las contradicciones económicas y sociales del régimen de Porfirio Díaz.",
                    contenido: `
                        <h4>1. Orden y Progreso (1876-1911)</h4>
                        <p>El gobierno de <strong>Porfirio Díaz</strong> se extendió por más de tres décadas bajo el lema positivista de "Orden y Progreso". Durante este periodo se tendieron más de 19,000 kilómetros de vías férreas, se impulsó la inversión extranjera y se modernizó la minería. No obstante, el crecimiento económico se sostuvo sobre el despojo de tierras comunales, las tiendas de raya en las haciendas y la represión de huelgas obreras como las de <strong>Cananea (1906)</strong> y <strong>Río Blanco (1907)</strong>.</p>
                    `,
                    glosario: "Tienda de raya: Establecimiento dentro de las haciendas porfiristas donde los peones eran obligados a comprar a crédito endeudándose de por vida."
                },
                {
                    titulo: "Lección 4: La Revolución Mexicana (1910) y la Constitución de 1917",
                    aprendizaje: "Explica el proceso de la Revolución Mexicana y la importancia de la Constitución de 1917.",
                    contenido: `
                        <h4>1. Facciones revolucionarias y derechos sociales</h4>
                        <p>El 20 de noviembre de 1910 inició la Revolución Mexicana convocada por <strong>Francisco I. Madero</strong> mediante el Plan de San Luis bajo el lema "Sufragio Efectivo, No Reelección". Posteriormente surgieron demandas agrarias como el Plan de Ayala de <strong>Emiliano Zapata</strong> ("Tierra y Libertad"), la División del Norte de Francisco Villa y el Ejército Constitucionalista de Venustiano Carranza. El proceso culminó con la <strong>Constitución del 5 de febrero de 1917</strong>, pionera mundial al incluir garantías sociales en sus artículos <strong>3°</strong> (educación laica y gratuita), <strong>27°</strong> (propiedad de tierras y recursos naturales) y <strong>123°</strong> (derechos laborales).</p>
                    `,
                    glosario: "Constitución social: Carta Magna que incorpora derechos colectivos para campesinos y trabajadores."
                },
                {
                    titulo: "Lección 5: El México Contemporáneo: Cardenismo, Expropiación Petrolera e Instituciones",
                    aprendizaje: "Reconoce el proceso de creación de instituciones y el impacto del Cardenismo.",
                    contenido: `
                        <h4>1. Estado posrevolucionario y Expropiación Petrolera (1938)</h4>
                        <p>Durante el siglo XX se consolidaron las instituciones del Estado mexicano: la Secretaría de Educación Pública (SEP) impulsada por José Vasconcelos en 1921, el Banco de México (1925), el IPN (1936) y el IMSS (1943). Durante la presidencia del general <strong>Lázaro Cárdenas del Río (1934-1940)</strong> se ejecutó el mayor reparto agrario ejidal y el <strong>18 de marzo de 1938</strong> se decretó la Expropiación Petrolera, dando origen a Petróleos Mexicanos (PEMEX).</p>
                    `,
                    glosario: "Ejido: Modalidad de propiedad social de la tierra entregada a núcleos campesinos tras la Reforma Agraria."
                }
            ],
            tareas: [
                { pregunta: "1. ¿Qué presidente promulgó las Leyes de Reforma estableciendo la separación entre la Iglesia y el Estado?", opciones: ["Antonio López de Santa Anna", "Benito Juárez", "Porfirio Díaz", "Agustín de Iturbide"], correcta: 1 },
                { pregunta: "2. ¿Qué artículo de la Constitución de 1917 establece el derecho a la educación laica, gratuita y obligatoria?", opciones: ["Artículo 3°", "Artículo 27°", "Artículo 123°", "Artículo 130°"], correcta: 0 },
                { pregunta: "3. Presidente de México que decretó la Expropiación Petrolera el 18 de marzo de 1938:", opciones: ["Plutarco Elías Calles", "Álvaro Obregón", "Lázaro Cárdenas del Río", "Venustiano Carranza"], correcta: 2 }
            ],
            examen: [
                { pregunta: "1. Tratado firmado en 1848 mediante el cual México perdió más de la mitad de su territorio frente a Estados Unidos:", opciones: ["Tratado de Córdoba", "Tratado de Guadalupe Hidalgo", "Tratado de Miramar", "Plan de Iguala"], correcta: 1 },
                { pregunta: "2. Huelgas obreras reprimidas durante el Porfiriato que fueron antecedente directo de la Revolución Mexicana:", opciones: ["Cananea y Río Blanco", "Puebla y Querétaro", "Veracruz y Tampico", "Zacatecas y Celaya"], correcta: 0 },
                { pregunta: "3. Documento proclamado por Emiliano Zapata en 1911 exigiendo la restitución de tierras a los pueblos campesinos:", opciones: ["Plan de San Luis", "Plan de Ayala", "Plan de Guadalupe", "Plan de Agua Prieta"], correcta: 1 },
                { pregunta: "4. Artículo de la Constitución de 1917 que regula las relaciones laborales (jornada máxima de 8 horas y salario mínimo):", opciones: ["Artículo 3°", "Artículo 27°", "Artículo 123°", "Artículo 1°"], correcta: 2 },
                { pregunta: "5. Institución educativa federal creada en 1921 bajo el impulso de José Vasconcelos para alfabetizar al país:", opciones: ["El Colegio de México", "La Secretaría de Educación Pública (SEP)", "El CONACYT", "El INAH"], correcta: 1 }
            ]
        }
    }
};