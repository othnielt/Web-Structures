<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="utf-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>
                    <xsl:value-of select="product/name"/> Nutrition Facts
                </title>
            </head>
            <body>
                <h1>Nutrition Facts for <xsl:value-of select="product/name"/> - Serving Size: <xsl:value-of select="product/serving_size"/></h1>
                <table>
                    <tr>
                        <th>Nutrient</th>
                        <th>Amount per serving</th>
                    </tr>
                    <tr>
                        <td>Total Calories:</td>
                        <td><xsl:value-of select="product/calories/total"/> calories</td>
                    </tr>
                    <tr>
                        <td>Fat Calories:</td>
                        <td><xsl:value-of select="product/calories/fat_calories"/> calories</td>
                    </tr>
                    <tr>
                        <td>Total Fat:</td>
                        <td><xsl:value-of select="product/fat/total"/> </td>
                    </tr>
                    <tr>
                        <td>Saturated Fat:</td>
                        <td><xsl:value-of select="product/fat/saturated"/> </td>
                    </tr>
                    <tr>
                        <td>Cholesterol:</td>
                        <td><xsl:value-of select="product/cholesterol"/> </td>
                    </tr>
                    <tr>
                        <td>Sodium:</td>
                        <td><xsl:value-of select="product/sodium"/> </td>
                    </tr>
                    <tr>
                        <td>Total Carbohydrates:</td>
                        <td><xsl:value-of select="product/carbohydrates/total"/> </td>
                    </tr>
                    <tr>
                        <td>Dietary Fiber:</td>
                        <td><xsl:value-of select="product/carbohydrates/fiber"/> </td>
                    </tr>
                    <tr>
                        <td>Sugars:</td>
                        <td><xsl:value-of select="product/carbohydrates/sugars"/> </td>
                    </tr>
                    <tr>
                        <td>Protein:</td>
                        <td><xsl:value-of select="product/protein"/> </td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

