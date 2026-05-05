# Calculadora de Incorporación al Ascensor

Esta herramienta interactiva ha sido diseñada para facilitar el cálculo justo y transparente de la cuota que debe abonar un nuevo vecino al incorporarse a una comunidad de ascensor ya existente.

![Calculadora de Ascensor](img/calculadora_ascensor.png)

## ¿De qué trata este proyecto?

Cuando una comunidad de vecinos instala un ascensor y solo una parte de los propietarios asume el coste inicial, la **Ley de Propiedad Horizontal (Art. 17.2)** permite que otros vecinos se unan posteriormente. El reto suele ser determinar qué importe es el más justo para compensar a quienes adelantaron el capital hace años.

Esta aplicación automatiza esos cálculos basándose en criterios técnicos y legales habituales en España, asegurando una transición fluida y sin conflictos entre vecinos.

<div class="w-full flex justify-center my-8">
    <a href="https://fervilber.github.io/calculo_ascensor_comunidad/" target="_blank" class="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-brand-700 rounded-2xl hover:bg-brand-800 transition-all hover:scale-105 shadow-lg">
        Acceder a la Aplicación
        <svg class="w-5 h-5 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
    </a>
</div>

## Funcionamiento y Metodología

La calculadora desglosa el coste en dos grandes bloques fundamentales:

### 1. Cuota de Instalación Actualizada
Toma el coste inicial de la obra y lo divide entre el nuevo número total de usuarios. Lo más importante es que aplica el **IPC acumulado** (inflación) para que el dinero de hace años se traduzca a valor actual. Esto garantiza que los "vecinos fundadores" no pierdan poder adquisitivo por el capital adelantado.

### 2. Cuota de Mantenimiento Histórico
Calcula la parte proporcional (1/N) de todos los gastos de mantenimiento, luz, inspecciones y reparaciones que los vecinos originales han estado pagando durante los años de uso. El nuevo vecino entra a disfrutar de una infraestructura mantenida y operativa.

## Base Legal (Art. 17.2 LPH)

La normativa española establece que los propietarios que no participen inicialmente pueden incorporarse abonando la cuota que les hubiera correspondido, debidamente actualizada. 

Un punto clave de nuestra metodología es que **no se aplica amortización por uso** (depreciación) a favor del que entra tarde. Esto se debe a que el nuevo vecino se beneficia de una infraestructura consolidada que ha revalorizado su vivienda desde el primer día, sin haber asumido el riesgo financiero inicial.

## Características Principales

*   **Ajuste Dinámico:** Parámetros configurables de coste, años, vecinos e IPC.
*   **Informe Profesional:** Generación automática de un PDF en una sola cara A4, listo para presentar en junta.
*   **Transparencia Total:** Muestra exactamente cuánto debe recibir cada vecino fundador para que el reparto sea matemáticamente perfecto.

## Tecnologías Utilizadas

*   **React + Vite:** Para una experiencia de usuario instantánea y fluida.
*   **Tailwind CSS v4:** Diseño moderno, limpio y totalmente adaptable.
*   **Lucide React:** Iconografía técnica y profesional.
*   **html2pdf.js:** Motor de generación de informes técnicos directamente en el cliente.
