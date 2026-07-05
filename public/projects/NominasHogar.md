---
title: "Nóminas Hogar"
description: "Calculadora y generador simplificado de nóminas en PDF para empleadas del hogar según la normativa vigente."
year: 2026
tags: ["App", "Finanzas", "Calculadora", "React"]
image: "img/nominashogar.png"
url: "https://fervilber.github.io/nominas-hogar/"
---

# Nóminas Hogar — Gestor de Recibos Salariales

**Nóminas Hogar** es una herramienta web interactiva orientada a empleadores de servicio doméstico. Permite calcular de forma precisa y transparente los desgloses salariales de las empleadas del hogar y exportar un recibo de nómina limpio, profesional y listo para firmar en un solo folio A4.

![Nóminas Hogar Cover](img/nominashogar.png)

## El Concepto: Simplificar la Gestión Administrativa del Hogar

La legislación sobre las empleadas del hogar en España ha experimentado múltiples cambios de cotización en los últimos años. Para un empleador particular, calcular las cuotas patronales, las aportaciones del trabajador y confeccionar el recibo oficial puede ser un proceso confuso. **Nóminas Hogar** elimina esa fricción proporcionando una interfaz directa en la que solo se introducen los datos básicos pactados.

Para comprender cómo está estructurada la lógica de la aplicación y la conformación del recibo de salario, podemos aplicar la **analogía futbolística**:

*   **El Reglamento (Rules): Las Leyes y Bases de la Seguridad Social**  
    Son las reglas de juego impuestas por la normativa laboral. Definen las bases de cotización mínimas y máximas por tramos de ingresos, los porcentajes obligatorios para contingencias comunes, desempleo y el mecanismo de aportación al FOGASA. La aplicación valida el cálculo para asegurar que no se cometan infracciones legales.
*   **Los Jugadores (Skills): Los Conceptos Económicos del Recibo**  
    Cada concepto que figura en la nómina es un jugador especializado: el *Salario Base* es el delantero principal; las *Pagas Extraordinarias* prorrateadas o de pago único son los centrocampistas; y las *Deducciones por Aportaciones del Trabajador* (la cuota obrera) y las *Retenciones* son los defensas que restan del total para obtener el *Neto a Percibir* final.
*   **La Dirección Técnica (Workflow): El Motor de Cálculo en React**  
    Es el organizador táctico del sistema. Recibe los parámetros definidos por el usuario (salario bruto pactado, horas, pagas) y distribuye dinámicamente los importes a cada concepto (los jugadores) respetando los límites de las bases vigentes (el reglamento), controlando que el resultado se imprima en un PDF perfectamente estructurado en un solo paso.

<div class="w-full flex justify-center my-8">
    <a href="https://fervilber.github.io/nominas-hogar/" target="_blank" class="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-brand-700 rounded-2xl hover:bg-brand-800 transition-all hover:scale-105 shadow-lg">
        Acceder al Generador de Nóminas
        <svg class="w-5 h-5 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
    </a>
</div>

## Características Principales

*   **Cálculo Automatizado de Cuotas:** Calcula la base de cotización por tramos, la cuota correspondiente a la empleada y la cuota a cargo del empleador (incluyendo contingencias comunes, profesionales y desempleo).
*   **Gestión Flexible de Pagas Extras:** Permite configurar la nómina con pagas extras prorrateadas mensualmente o pagaderas en meses específicos.
*   **Absoluta Privacidad (Servidor Zero):** Todos los cálculos se realizan localmente en el navegador del usuario. Ningún dato sensible sobre salarios, nombres o cuentas bancarias se envía a servidores externos.
*   **Formato de Impresión Óptimo:** Genera un diseño de nómina oficial adaptado para impresora o archivo PDF en una sola página limpia.

## Tecnologías Utilizadas

*   **React + Vite:** Para ofrecer un cálculo en tiempo real y una reactividad instantánea al modificar cualquier parámetro.
*   **Tailwind CSS:** Diseño responsivo, elegante y totalmente adaptativo para dispositivos móviles o escritorio.
*   **html2pdf.js / CSS Page Breaks:** Sistema avanzado de maquetación en caliente para garantizar la conversión de la nómina en formato PDF sin cortes accidentales.
*   **Markdown:** Documentación y guías del usuario para su puesta en marcha rápida.
