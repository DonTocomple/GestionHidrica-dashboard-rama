// dashboard.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  cards = [
    { id: 'barChart', title: 'Gráfico de Barras' },
    { id: 'pieChart', title: 'Gráfico de Pastel' },
    { id: 'newChart1', title: 'Tarjeta 1' },
    { id: 'newChart2', title: 'Tarjeta 2' }
  ];

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createBarChart();
    this.createPieChart();
    this.createNewChart1();
    this.createNewChart2();
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Pulso 1', 'Pulso 2', 'Pulso 3'],
        datasets: [{
          label: 'Tiempo (s)',
          data: [1, 2, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  createNewChart1() {
    // Similar implementation for newChart1
  }

  createNewChart2() {
    // Similar implementation for newChart2
  }
}
