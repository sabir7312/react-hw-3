import React from "react";

export default function Statistics({ stats }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="row row-cols-auto stat-list">
        {stats.map((item) => (
          <li class="item">
            <p class="label">{item.label}</p>
            <p class="percentage">{item.percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
