// Spanish release notes, item for item with CHANGELOG.md (same order and count per version).
const notes: Record<string, string[]> = {
  '1.1.0': [
    'Diez temas nuevos, claros y oscuros: Fern, Tide, Blossom, Dune y Graphite.',
    'El grafo de commits se lee más como un mapa: una franja del color de la rama va desde su etiqueta, atraviesa el grafo y llega al mensaje del commit, y una rama creada a partir de la rama actual queda alineada con ella, aunque tenga varios commits.',
    'El commit actual se distingue enseguida: un doble anillo alrededor de su avatar y una franja más marcada en la fila.',
    'Arrastrar una rama sobre otra siempre actúa sobre la rama que arrastras, sea cual sea la rama actual: *Fast-forward de f a develop* cuando f va por detrás, *Rebase de f sobre develop*, *Fusionar f en develop* (oculto cuando no hay nada que fusionar).',
    'Los menús de rama dicen exactamente qué eliminan: *Eliminar la rama local “f”*, o *Eliminar “f” y “origin/f”* cuando tiene upstream. Los nombres aparecen entre comillas, así que un nombre corto ya no parece cortado.',
    'La lista de etiquetas que se abre al pasar el puntero sobre una fila con muchas ramas incluye el menú contextual completo de cada rama.',
    'Las confirmaciones de Eliminar, Forzar push y otras acciones destructivas tienen un botón rojo.',
    'Hacer clic debajo de la última fila del grafo mantiene el commit seleccionado; el número de archivos modificados sigue siendo legible en un panel estrecho.',
    'Los archivos sin preparar y preparados se desplazan en sus propios paneles, con las cabeceras fijas; un diff abierto sigue a su archivo cuando lo preparas o lo quitas del área de preparación, y hacer commit desde él abre el nuevo commit.',
    'El botón para cerrar el diff está en el extremo derecho y es más fácil de pulsar.',
    'Un llavero que no entrega un token guardado ya no marca la cuenta como desconectada.',
  ],
  '1.0.2': [
    'La vista previa de los datos para la IA se lee como texto: las instrucciones para la IA y tu solicitud con saltos de línea reales, las partes ocultadas marcadas, y el modelo y los límites en una sola línea. Un selector Legible / JSON sigue mostrando la solicitud exacta.',
  ],
  '1.0.1': [
    'Cerrar la última ventana ahora solo la oculta: al hacer clic en el icono del Dock vuelve al instante, con sus pestañas, su grafo y su terminal, en lugar de cargar de nuevo todos los repositorios.',
    'Cuando la ventana se había cerrado de verdad, el icono del Dock abría una página de inicio vacía en lugar de tus repositorios.',
    'Las pull requests ya no dicen que GitHub rechazó el inicio de sesión guardado cuando la cuenta predeterminada del repositorio tiene un token caducado pero otra cuenta funciona: esa cuenta se omite sin avisar, y las cuentas que necesitan iniciar sesión ya no se eligen por defecto.',
    'Los tokens se leen del llavero una sola vez, así que un llavero ocupado ya no parece un inicio de sesión rechazado.',
    'El ⚠ junto a una rama cuyo upstream se eliminó en el remoto se explica al pasar el puntero por encima e indica qué hacer.',
  ],
  '1.0.0': [
    'Primera versión pública. Aún sin notarizar: la primera vez que la abras, macOS pedirá confirmación en Ajustes del Sistema ▸ Privacidad y seguridad ▸ Abrir igualmente. Las versiones posteriores llegan mediante el actualizador integrado de la app.',
    'Grafo de commits para repositorios grandes (más de 100.000 commits), detalles y diffs de commits (en paralelo o unificados, a nivel de palabra), historial de archivos y blame.',
    'Preparación por archivo, fragmento o línea; commits con amend, sign-off, firma (GPG/SSH), coautores y convenciones de equipo.',
    'Ramas y etiquetas, fetch / pull / push con seguimiento del upstream, stashes, deshacer y rehacer para la mayoría de las operaciones.',
    'Merge, rebase, cherry-pick y revert arrastrando y soltando en el grafo; rebase interactivo; un editor de conflictos a tres bandas.',
    'Pestañas, varias ventanas y perfiles que guardan cada uno sus propias pestañas, repositorios recientes e identidad de commit.',
    'Cuentas SSH que eligen la clave correcta para cada repositorio; inicio de sesión en GitHub y GitLab para pull requests, issues, revisiones y Actions.',
    'Terminal integrada, editor de archivos, búsqueda y filtros, worktrees, submódulos, bisect, recuperación con reflog, Git LFS.',
    'Mensajes de commit y explicaciones con IA usando tu propio proveedor; un servidor MCP para que otras herramientas puedan controlar GitLoom.',
    'Personalización de temas, diseño y teclado; 16 idiomas.',
  ],
};
export default notes;
