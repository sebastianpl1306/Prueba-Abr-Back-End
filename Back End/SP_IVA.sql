-------------------------------------------------------
-- DESCRIPCIÓN: Creación de procedimiento almacenado
-- FECHA: 3/07/2023
--------------------------------------------------------
CREATE PROCEDURE [dbo].CalcularIva
    @xml_usuarios XML,
    @xml_compras XML,
    @xml_itemsIva XML
AS
BEGIN
    -- Declarar variables temporales para almacenar los datos del XML
    DECLARE @usuarios TABLE (Id INT, Nombre VARCHAR(50))
    DECLARE @compras TABLE (Usuario INT, Producto INT, Valor DECIMAL(18, 2))
    DECLARE @itemsIva TABLE (IdProducto INT, Porcentaje DECIMAL(18, 2))

    -- Insertar los datos del XML en las variables temporales
    INSERT INTO @usuarios (Id, Nombre)
    SELECT
        T.c.value('(Id)[1]', 'INT'),
        T.c.value('(Nombre)[1]', 'VARCHAR(50)')
    FROM
        @xml_usuarios.nodes('/Data/Usuario') AS T(c)

    INSERT INTO @compras (Usuario, Producto, Valor)
    SELECT
        T.c.value('(Usuario)[1]', 'INT'),
        T.c.value('(Producto)[1]', 'INT'),
        T.c.value('(Valor)[1]', 'DECIMAL(18, 2)')
    FROM
        @xml_compras.nodes('/Data/Item') AS T(c)

    INSERT INTO @itemsIva (IdProducto, Porcentaje)
    SELECT
        T.c.value('(IdProducto)[1]', 'INT'),
        T.c.value('(Porcentaje)[1]', 'DECIMAL(18, 2)')
    FROM
        @xml_itemsIva.nodes('/Data/Producto') AS T(c)

    -- Mostrar los datos insertados en las variables temporales
	SELECT T_Usuarios.Id, T_Usuarios.Nombre, SUM(T_Compras.Valor) as ValorTotal, SUM(T_Compras.Valor * T_Iva.Porcentaje) as iva FROM @usuarios T_Usuarios
	LEFT JOIN @compras T_Compras ON T_Usuarios.Id = T_Compras.Usuario 
	LEFT JOIN @itemsIva T_Iva ON T_Iva.IdProducto = T_Compras.Producto
	GROUP BY T_Usuarios.Id, T_Usuarios.Nombre
	ORDER BY id;
END

--------------------------------------------------------------------
-- DESCRIPCIÓN: Ejecución del Procedimento Almacenado CalcularIva
-- FECHA: 3/07/2023
--------------------------------------------------------------------- 
DECLARE @xml_usuarios XML, @xml_compras XML, @xml_itemsIva XML
SET @xml_usuarios = '
<Data>
<Usuario><Id>14</Id><Nombre>Juan</Nombre></Usuario>
<Usuario><Id>17</Id><Nombre>Maria</Nombre></Usuario>
<Usuario><Id>25</Id><Nombre>Carlos</Nombre></Usuario>
<Usuario><Id>15</Id><Nombre>Fernanda</Nombre></Usuario>
</Data>'
 SET @xml_compras = '
<Data>
<Item><Usuario>14</Usuario><Producto>78</Producto><Valor>300</Valor></Item>
<Item><Usuario>17</Usuario><Producto>23</Producto><Valor>568</Valor></Item>
<Item><Usuario>17</Usuario><Producto>99</Producto><Valor>350</Valor></Item>
<Item><Usuario>14</Usuario><Producto>99</Producto><Valor>107</Valor></Item>
<Item><Usuario>25</Usuario><Producto>23</Producto><Valor>425</Valor></Item>
</Data>'
 SET @xml_itemsIva = '
<Data>
<Producto><IdProducto>23</IdProducto><Porcentaje>0.16</Porcentaje></Producto>
<Producto><IdProducto>99</IdProducto><Porcentaje>0.19</Porcentaje></Producto>
</Data>'

EXEC CalcularIva @xml_usuarios, @xml_compras, @xml_itemsIva