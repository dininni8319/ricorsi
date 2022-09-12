<h3 class="mx-5 py-3 text-center">Ecco tutti gli aggiornamenti di questa pratica</h3>
<div class="container">
  <table class=" table table-bordered bg-white  " >
    <h3 class="text-center">Fasi</h3>
    <thead>
      <tr>
        <th scope="col">Mediazione </th>
        <th scope="col">Ricorso 1° Grado</th>
        <th scope="col">Ricorso 2° Grado</th>
        <th scope="col">Cassazione</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          @switch($fase->fase)
              @case(1)
                <td>Mediazione</td>
                <td></td>
                <td></td>
                <td></td>
                @break
              @case(2)
                <td></td>
                <td>Ricorso 1° Grado</td>
                <td></td>
                <td></td>
                @break
              @case(3)
                <td></td>
                <td></td>
                <td>Ricorso 2° Grado</td>
                <td></td>
                @break
              @case(4)
                <td></td>
                <td></td>
                <td></td>
                <td>Cassazione</td>
                @break
              @default
                  Not found
          @endswitch 
        </tr> 
    </tbody>
  </table>
</div>
            
                             