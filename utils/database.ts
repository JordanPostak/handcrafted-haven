import { db } from '@vercel/postgres';

export async function getProductById(productId: string) {
  const client = await db.connect();

  try {
    const result = await client.query(
      `SELECT * FROM products WHERE product_id = $1`,
      [productId]
    );

    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      throw new Error('Product not found');
    }
  } finally {
    client.release();
  }
}

export async function getAllProducts() {
    const client = await db.connect();
  
    try {
      const result = await client.query(
        `SELECT * FROM products`
      );
  
      return result.rows;
    } finally {
      client.release();
    }
  }