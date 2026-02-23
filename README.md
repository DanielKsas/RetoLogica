# Evaluación de Lógica

Nota: La solución debe ser clara, modular (con funciones) y manejar casos borde.

---

## Ejercicio 1 (Básico) 

### Descripción
Dado un arreglo de enteros `precios`, encuentra los **3 precios más altos** y muéstralos en **orden descendente**.

- Si el arreglo tiene menos de 3 elementos, devuelve **todos** los elementos ordenados de mayor a menor.
- **No está permitido usar** funciones de ordenamiento del lenguaje:
  - JavaScript: `Array.sort()`
  - Java: `Arrays.sort()` / `Collections.sort()`

### Objetivo de aprendizaje
- Recorrer arreglos
- Comparar valores
- Mantener el “Top 3” actualizado con lógica condicional
- Modularizar en funciones (por ejemplo: insertar en top)

### Restricciones
- `1 ≤ n ≤ 100000`
- `0 ≤ precios[i] ≤ 10^9`

---

---
## Ejercicio 2 (Medio) 

### Descripción
Construye un programa que calcule una factura a partir de una lista de precios, un cupón y un costo de envío.

Reglas:
1. `subtotal = suma(precios)`
2. Aplicar cupón:
   - `"DESC10"`: descuento del 10% sobre el subtotal
   - `"DESC20"`: descuento del 20% sobre el subtotal **solo si** `subtotal >= 200000`
   - `"FREESHIP"`: el envío queda en `0` (sin descuento al subtotal)
   - `"NONE"`: sin cambios
3. `base = subtotal - descuento`
4. `iva = 19%` de `base` **(sin incluir envío)**
5. El `iva` debe **redondearse al entero más cercano** (0.5 hacia arriba)
6. `total = base + iva + envio`


### Objetivo de aprendizaje
- Recorrer arreglos con ciclos (`for` / `while`) y controlar límites (`0`, `n-1`)
- Usar condicionales para comparar valores y construir lógica (detección de picos)
- Crear y usar funciones para separar responsabilidades (invertir, sumar, max/min, picos)
- Manipular arreglos: invertir, generar listas de resultados (índices)
- Realizar cálculos básicos con cuidado de tipos numéricos y redondeo del promedio

### Entrada
1. Entero `n`
2. `n` enteros (precios)
3. String `cupon`
4. Entero `envio`

### Salida
Imprimir exactamente 4 líneas:
- `SUBTOTAL X`
- `DESCUENTO Y`
- `IVA Z`
- `TOTAL T`

### Restricciones
- `1 ≤ n ≤ 100000`
- `0 ≤ precios[i], envio ≤ 10^9`
- `cupon ∈ {NONE, DESC10, DESC20, FREESHIP}`
---

---
## Ejercicio 3 (Avanzado) 

### Descripción
Tienes una lista de mediciones por minuto de un sistema (CPU, latencia, ventas por minuto… etc).  
El equipo de monitoreo quiere detectar **picos** y generar un reporte rápido.

---

### Reglas
Dado un arreglo de enteros `m[]` (mediciones), debes:

1) Construir un arreglo `inv[]` que sea `m[]` pero **invertido**.
2) Calcular:
   - `total` (suma)
   - `promedio` (redondeado al entero más cercano, 0.5 hacia arriba)
   - `max` y `min`
3) Detectar los **picos**:
   - Un índice `i` es pico si:
     - `0 < i < n-1`
     - y `m[i] > m[i-1]` **y** `m[i] > m[i+1]`
4) Imprimir:
   - La cantidad de picos
   - Los índices de picos (en orden ascendente)
   - El “pico más fuerte”: el pico con mayor valor `m[i]`
     - Si hay empate, el de menor índice

---
### Salida (en este orden)
1. `INV:` seguido de `inv[]`
2. `TOTAL: X`
3. `PROMEDIO: Y`
4. `MAX: A`
5. `MIN: B`
6. `PICOS: k`
7. `INDICES_PICOS:` lista de índices (o `NONE` si no hay)
8. `PICO_MAS_FUERTE:` índice del pico más fuerte (o `-1` si no hay)

---
### Restricciones
- `1 ≤ n ≤ 100000`
- `-10^9 ≤ m[i] ≤ 10^9`
---
---
